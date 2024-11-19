
import React, { useState } from "react";
import {
    Button,
    TextField,
    Container,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CreateDoc = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSave = async () => {
        if (title && content) {
            try {
                await addDoc(collection(db, "documents"), { title, content });
                alert("Document saved successfully!");
                setTitle("");
                setContent("");
                navigate("/");
            } catch (error) {
                console.error("Error saving document:", error);
            }
        } else {
            alert("Please fill in both the title and content.");
        }
    };
    
    return (
       <div>
            <Container sx={{ mt: 5, display: "flex", justifyContent: "center",}}>
                <Card sx={{ width: "80%", maxWidth: 600, backgroundColor: "#F5F5F5" }}>
                    <CardContent>
                        <Typography variant="h4" sx={{ mb: 3, textAlign: "center", color: "#333" }}>
                             New Document
                        </Typography>

                        <TextField
                            label="Document Title"
                            fullWidth
                            variant="outlined"
                            sx={{ mb: 3 }}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <ReactQuill
                            theme="snow"
                            value={content}
                            onChange={setContent}
                            style={{
                                height: "250px",
                                marginBottom: "20px",
                                backgroundColor: "#fff",
                                borderRadius: "5px",
                            }}
                        />

                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleSave}
                            sx={{
                                backgroundColor: "#333",
                                color: "white",
                                py: 1.5,
                                mt: 2,
                                '&:hover': {
                                    backgroundColor: "#2E8B57",
                                },
                                '&:active': {
                                    backgroundColor: "#333",
                                },
                            }}
                        >
                            UPLOAD 
                        </Button>
                    </CardContent>
                </Card>
            </Container>
       </div>
    );
};

export default CreateDoc;