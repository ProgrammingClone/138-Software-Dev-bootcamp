import { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import StudentList from "../components/StudentList";
import Loading from "../components/Loading";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStudents = async () => {
    setLoading(true);

    // Mock API + artificial delay
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStudents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" component="h1">
          Student Dashboard
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<RefreshIcon />}
          onClick={fetchStudents}
        >
          Refresh
        </Button>
      </Box>

      {loading ? <Loading /> : <StudentList students={students} />}
    </Container>
  );
}
