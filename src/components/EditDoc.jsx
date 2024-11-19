import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";

const EditDoc = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [docData, setDocData] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const docRef = doc(db, "documents", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDocData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };
    fetchDocument();
  }, [id]);

  const handleUpdate = async () => {
    if (!docData.title || !docData.content) {
      alert("Both fields are required!");
      return;
    }

    try {
      const docRef = doc(db, "documents", id);
      await updateDoc(docRef, {
        title: docData.title,
        content: docData.content,
      });
      alert("Document updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <Container sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "80%", maxWidth: 600, backgroundColor: "#F5F5F5" }}>
        <CardContent>
          <Typography
            variant="h4"
            sx={{ mb: 3, textAlign: "center", color: "#333" }}
          >
            Edit Document
          </Typography>

          <TextField
            label="Title"
            value={docData.title}
            onChange={(e) => setDocData({ ...docData, title: e.target.value })}
            fullWidth
            variant="outlined"
            sx={{ mb: 3 }}
          />

          <TextField
            label="Content"
            value={docData.content}
            onChange={(e) => setDocData({ ...docData, content: e.target.value })}
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            sx={{
              mb: 3,
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleUpdate}
            sx={{
              backgroundColor: "#000",
              color: "white",
              py: 1.5,
              "&:hover": {
                backgroundColor: "#2E8B57",
              },
              "&:active": {
                backgroundColor: "#444",
              },
              "&:focus": {
                backgroundColor: "#2E8B57",
              },
            }}
          >
            Update Document
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EditDoc;