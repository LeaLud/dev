

export function Article(props) {
    return (
      <article className='sectionWrap'>
        <img 
            className='sectionImage'
            src={require(`../img/paisaje${props.image}.jpg`)}
            alt={`Paisaje ${props.alt}`}>
        </img>
        <div className='textWrap'>
            <div>
				<h2 className='titulo'>{props.title}</h2>
				<h3 className='subtitulo'>{props.subtitle}</h3>
            </div>
            <div>
				<p>{props.description}</p>
			</div>
        </div>
      </article>
    );
}