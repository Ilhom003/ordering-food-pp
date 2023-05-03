import styled from "styled-components";


const getType = ({ type }) => {
    switch (type) {
        case 'primary':
            return {
                background: '#df2020',
                color: '#fff',
                transition: '.3s',
                border: 'none'
            };

        case 'outline':
            return {
                background: 'transparent',
                border: '1px solid #df2020',
                color: '#df2020'
            }

        default:
            return {
                background: '#df2020',
                color: '#fff',
                border:'none',
                padding:'7px 25px',
                fontSize: '.9rem',
            };
    }

}

export const Container = styled.button`
    ${getType}
    /* border: none; */
    margin-right: ${({ mr }) => `${mr}`};
    margin-left: ${({ ml }) => `${ml}`};
    margin-top: ${({ mt }) => `${mt}`};
    margin-bottom: ${({ pb }) => `${pb}`};
    padding-right: ${({ pr }) => `${pr}`};
    padding-left: ${({ pl }) => `${pl}`};
    padding-top: ${({ pt }) => `${pt}`};
    padding-bottom: ${({ pb }) => `${pb}`};
    border-radius: 5px;
    font-size:${({fs})=> `${fs}`};
    cursor: pointer;
    font-weight: ${({fw})=> `${fw}`};
    font-family: inherit;
    :hover{
        background-color:${({hover})=> `${hover}`}
    }

    @media (max-width:1200px) {
        padding:5px 15px
    }
`