export default function Admin(){
    return(
        <section>
        <div className='container'>
            <h1 className='mb-4 mt-4'>Admin Panel </h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        className='form-control'
                        // onChange={}
                        // value={title}
                        autoComplete='off'
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        type='text'
                        id='description'
                        name='description'
                        className='form-control'
                        // onChange={}
                        // value={description}
                        rows='3'
                        autoComplete='off'
                        required
                    />
                </div>
                <div>
                    <input className='mt-2' required type="file" id='upload' name='upload' />
                    {/* <button className='btn btn-secondary mt-3'>Upload file</button> */}
                </div>
                <button type='submit' className='btn btn-primary mt-3'>{"Send"}</button>
            </form>
        </div>
    </section>
    );
}