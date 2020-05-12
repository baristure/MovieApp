import React from 'react'
import {Card,Icon,Image} from 'semantic-ui-react'

const MovieCard = ({movie}) =>(
	<Card>
		<Image src={movie.cover} />
		<Card.Content>
			<Card.Header>
				{ movie.title}
			</Card.Header>
			<Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
			</Card.Meta>
			<Card.Description>
			
			</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<div>
				<Icon name='user' />
				22 Friends
			</div>
		</Card.Content>
	</Card>
)

export default MovieCard;