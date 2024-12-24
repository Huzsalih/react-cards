import Card from './Cards';

function App() {
  const cardData = [
    {
      title: 'Bootstrap',
      description: 'A free, open-source framework for building websites and web apps that uses HTML, CSS, and JavaScript.',
      imgSrc: "/assets/bootstrap.jpg",
    },
    {
      title: 'React',
      description: 'An open-source JavaScript library that helps developers create user interfaces (UIs) and manage user interactions.',
      imgSrc: "/assets/react.png",
    },
    {
      title: 'Javascript',
      description: 'A programming language that allows developers to create interactive web pages.',
      imgSrc: "/assets/javascript.jpg",
    },
  ];

  return (
    <div>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imgSrc={card.imgSrc}
        />
      ))}
    </div>
  );
}

export default App;
