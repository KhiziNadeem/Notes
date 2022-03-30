const Home = () => {
    const handleClick = () =>{
        console.log('Hello Ninjas');
    }
    return ( 
        <div className="home">
            <h2>This is Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;