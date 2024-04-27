import React from 'react'
import styled from 'styled-components'
import BasicCard from './BasicCard'
const SearchReasult = ({data : requests}) => {
  return (
    <DataContainer>
        <DataCards>
              {requests?.map((request)=><DataCard key={request._id}><BasicCard request ={request} /></DataCard>)}
        </DataCards>
    </DataContainer>
  )
}

export default SearchReasult

const DataContainer = styled.div`
   padding: 20px;
`;
const DataCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const DataCard = styled.div`
     margin: 20px;
`;