import axios from 'axios';

const getNotesFromAI = async (topic, roughNotes) => {
  try {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem("userId");

    const response = await axios.post('http://localhost:5000/api/generate-summary', 
      {
        topic,
        notes: roughNotes,
        userId
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    

      return response.data.summary;

  } catch (error) {
      console.error("Error fetching notes: ", error);
      return "Failed to generate notes. Please try again!";
  }
};

export {getNotesFromAI} 