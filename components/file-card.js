'use client';

import Link from "next/link";
import styles from "./file-card.module.css";

export default function FileCard(props){

  const downloadFile = async () => {

    const getBasename = (filePath) => {
      // Get the last part of the path using split and pop
      const parts = filePath.split('/');
      return parts.pop();
    };

    try {
      const response = await fetch(`http://localhost:3500/download?url=${props.cloudinaryUrl}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        const basename = getBasename(props.cloudinaryUrl);
        a.download = basename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download file');
      }
    } catch (error) {
      console.error('Error downloading file:', error);
      window.alert("Error downloading file!");
    }

  }

  return(
      <main className='container'>
          <div className='card mt-4'>
              <div className='card-body'>
                  <h4 className='card-title'>{props.fileTitle}</h4>
                  <div className='card-subtitle text-muted mb-2'>
                      {props.fileDate}
                  </div>
                  <div className='card-text mb-2'>{props.fileDescription}</div>
                  <Link href={`/email/?url=${props.cloudinaryUrl}`} className='btn btn-primary m-1'>Send</Link>
                  <a href={props.cloudinaryUrl} target="_blank" rel="noopener noreferrer" className='btn btn-success m-1'>Preview</a>
                  <button className='btn btn-info m-1' onClick={downloadFile}>Download</button>
                  <div className={styles.bottom_left}>
                    <div className='container'>
                      <div className='position-relative'>
                        <p className='text-primary mb-auto mt-2 fw-bold'>{props.fileSends || 0} Sends</p>
                        <p className={`text-info mt-1 fw-bold `}> {props.fileDownloads || 0} Downloads</p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </main>
  );
}