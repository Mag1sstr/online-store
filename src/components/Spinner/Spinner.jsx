import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <CircularProgress />
      </Box>
    </div>
  );
}
