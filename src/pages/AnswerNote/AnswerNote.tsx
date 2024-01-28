import React, { useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";

import { db } from "../../lib/firebase";

const AnswerNote: React.FC = () => {
  const docRef = doc(db, "quiz", "question");

  useEffect(() => {
    async function getFruits() {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getFruits();
  }, []);

  return <div>AnswerNote</div>;
};

export default AnswerNote;
