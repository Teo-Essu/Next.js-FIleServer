'use client';
import styles from "./file-card.module.css";

export default function FileCard(props){
  const handleEmail = () => {
    localStorage.setItem('url', props.cloudinaryUrl);
    // localStorage.setItem('cardId', props.id);
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
                    <a href='/email' className='btn btn-primary m-1' onClick={handleEmail}>Send</a>
                    <a href={props.cloudinaryUrl} target="_blank" rel="noopener noreferrer" className='btn btn-success m-1'>Preview</a>
                    <button className='btn btn-info m-1'>Download</button>
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