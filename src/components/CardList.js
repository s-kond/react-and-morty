import Card from "./Card";
export default function CardList({ cardDataArray }) {
  return (
    <div>
      {cardDataArray.map((card) => {
        return <Card key={card.id} cardData={card} />;
      })}
    </div>
  );
}
