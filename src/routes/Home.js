import styled from "styled-components"; 

const Background = styled.div `
align-items: center;
position: relative;
height: 200px;
`;

const MainText = styled.div`
position: absolute;
font-size: 30px;
text-align: center;
background-color: red;
top:50%;
left: 50%;
`;

function Home() {

    return(
        <Background>
            <MainText><h1>내 취향의 음악을 찾아보세요</h1></MainText>
        </Background>
    )
}

export default Home;