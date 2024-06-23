import fs from "fs";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "src/app/projects");

export const getProjectsMetadata = async () => {
  console.log("Reading projects directory:", projectsDirectory);
  const fileNames = fs.readdirSync(projectsDirectory);
  console.log("Found project directories and files:", fileNames);

  // Filter out non-directory files (like page.tsx, styles.css)
  const projectDirectories = fileNames.filter((fileName) => {
    const fullPath = path.join(projectsDirectory, fileName);
    return fs.lstatSync(fullPath).isDirectory();
  });

  console.log("Filtered project directories:", projectDirectories);

  const allMetadata = await Promise.all(
    projectDirectories.map(async (directoryName) => {
      const projectPath = path.join(
        projectsDirectory,
        directoryName,
        "metadata.ts"
      );
      console.log("Checking for metadata file at path:", projectPath);
      if (fs.existsSync(projectPath)) {
        const { metadata } = await import(projectPath);
        console.log("Read metadata:", metadata);
        return metadata;
      }
      console.log("Metadata file not found:", projectPath);
      return null;
    })
  );

  console.log("All metadata:", allMetadata.filter(Boolean));
  return allMetadata.filter(Boolean);
};
