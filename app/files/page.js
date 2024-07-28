import FileCard from "@/components/file-card";
import { DUMMY_FILES } from "@/dummy-files";

export default function Files(){
    return(
            <section>
                {/* {loading && <div className='d-flex justify-content-center align-items-center fw-bold text-primary'>Loading...</div>} */}
                <div>
                    {DUMMY_FILES.map((file, index,) => (
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