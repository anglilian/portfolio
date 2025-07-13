"use client";

import React, { useState, useEffect } from "react";
import ProjectBox from "@/components/ProjectBox";
import { ProjectMetadata } from "@/types/projects";

interface ProjectShowcaseProps {
  featuredOnly?: boolean;
  maxProjects?: number;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ 
  featuredOnly = false, 
  maxProjects 
}) => {
  const [subfolders, setSubfolders] = useState<string[]>([]);
  const [projects, setProjects] = useState<ProjectMetadata[]>([]);

  useEffect(() => {
    const fetchSubfolders = async () => {
      try {
        const response = await fetch("/api/listSubfolders");
        const data = await response.json();
        if (Array.isArray(data)) {
          setSubfolders(data);
        } else {
          console.error("Expected array but got", data);
        }
      } catch (error) {
        console.error("Error fetching subfolder names:", error);
      }
    };

    fetchSubfolders();
  }, []);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const metadataPromises = subfolders.map(async (subfolder) => {
          try {
            const metadata = await import(`../app/projects/${subfolder}/metadata`);
            return metadata.metadata as ProjectMetadata;
          } catch (error) {
            console.error(`Error importing metadata from ${subfolder}:`, error);
            return null;
          }
        });

        const allMetadata = await Promise.all(metadataPromises);
        let filteredProjects = allMetadata.filter((meta): meta is ProjectMetadata => meta !== null);
        
        // Filter for featured projects if requested
        if (featuredOnly) {
          filteredProjects = filteredProjects.filter(project => project.isFeatured);
        }
        
        // Sort by startDate in descending order
        const sortedProjects = filteredProjects.sort(
          (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
        
        // Limit number of projects if specified
        const finalProjects = maxProjects ? sortedProjects.slice(0, maxProjects) : sortedProjects;
        
        setProjects(finalProjects);
      } catch (error) {
        console.error("Error importing metadata:", error);
      }
    };

    if (subfolders.length > 0) {
      fetchMetadata();
    }
  }, [subfolders, featuredOnly, maxProjects]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((item, index) => (
        <ProjectBox
          key={index}
          title={item.title}
          startDate={new Date(item.startDate)}
          endDate={item.endDate}
          location={item.location}
          skills={item.skills}
          imageSrc={item.imageSrc}
          slug={item.slug}
        />
      ))}
    </div>
  );
};

export default ProjectShowcase;
