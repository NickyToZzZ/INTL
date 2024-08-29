function Jokes({setup, punchline}) {

    return ( 
        <>
            <div className="mt-10">
                <p className="text">{setup}</p>
                <p className="text">{punchline}</p>
            </div>
        </>
     );
}

export default Jokes;