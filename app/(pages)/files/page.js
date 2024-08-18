import FileCard from "@/components/file-card";
import { DUMMY_FILES } from "@/dummy-files";
import axios from "axios";

export default async function Files(){
    var files = {};
    
        await axios.get('http://localhost:3500/files')
        .then(response => {
            files = response.data;
        })
        .catch(error => {
            console.log('Failed to get files: ',error);
            throw new Error('Failed to get files: ',error);
        });


    return(
            <section>
                {/* {loading && <div className='d-flex justify-content-center align-items-center fw-bold text-primary'>Loading...</div>} */}
                <div>
                    {files.map((file, index,) => (
                        <FileCard
                            key={index}
                            id={index}
                            fileTitle={file.title}
                            fileDescription={file.description}
                            fileDate={file.timestamp}
                            cloudinaryUrl={file.cloudinaryUrl}
                            fileDownloads={file.downloadNum}
                            fileSends={file.sendNum}
                        />
                    ))}
                </div>
            </section>
    );
}