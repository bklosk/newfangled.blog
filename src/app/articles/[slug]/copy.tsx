// "use client";
// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import { google } from "googleapis";

// interface TestComponentProps {
//   text: string;
// }

// const fetchGoogleDriveFiles = async () => {
//   const auth = new google.auth.GoogleAuth({
//     keyFilename: "PATH_TO_SERVICE_ACCOUNT_KEY.json",
//     scopes: ["https://www.googleapis.com/auth/drive.readonly"],
//   });

//   const drive = google.drive({ version: "v3", auth });
//   const response = await drive.files.list();
//   return response.data.files;
// };

// const useGoogleDriveFiles = () => {
//   return useQuery("googleDriveFiles", fetchGoogleDriveFiles);
// };

// const TestComponent: React.FC<TestComponentProps> = ({ text }) => {
//   return (
//     <motion.p
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {text}!
//     </motion.p>
//   );
// };

// export default TestComponent;
