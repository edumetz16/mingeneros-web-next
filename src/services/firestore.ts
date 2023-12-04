import { getApps, initializeApp } from 'firebase-admin/app';
import { cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const app = getApps()[0] || initializeApp({
  credential: cert(JSON.parse(process.env.FIREBASE_SA || '{}'))
})

const db = getFirestore(app, 'mingenero');

export const getArticles = async () =>{
  const artilesSnap = await db.collection('Articles').get();
  return artilesSnap.docs.map(doc => doc.data());
}

export const getArticle = async (id: string) =>{
  const artilesSnap = await db.collection('Articles').where('originalId','==',id).get();
  const article = artilesSnap.docs.map(doc => doc.data())[0];
  article.attachmentsExpanded = [];
  if(article.attachment) {
    for(let attachment of article.attachment) {
      const attachmentSnap = await db.doc(`Attachments/${attachment}`).get();
      const attachmentData = attachmentSnap.data();
      if(attachmentData) {
        article.attachmentsExpanded.push({
          url: attachmentData.publicUrl,
          name: attachmentData.filename
        })
      }
    }
  }
  return article;
}