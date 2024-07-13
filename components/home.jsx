import "./styles/home.css";

function Home(){
    return(
        <div className="home">
        <h1>Welcome to my Super Store</h1>
        {/* image in the public folder*/}
        <img className="img-1" src="/images/banana.jpg" alt=""/>
        <div className="info">
            <h2>Organika Store</h2>
            <h5>Fresh food, 1 click away!</h5>
        </div>
        </div>
    );
}
export default Home;