import styled from "styled-components"


const Container = styled.div`
    background-color: teal;
    height: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`

const Announcement = () => {
    return (
        <Container>
            Super deals!! Free Shippings on orders over $50.
        </Container>
    )
}

export default Announcement
