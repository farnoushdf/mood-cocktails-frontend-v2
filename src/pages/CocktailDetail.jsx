import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CocktailCard from "../components/CocktailCard";

const CocktailDetail = ({ cocktails, searchResults, handleOrder, orderedCocktails, handleDelete}) => {
  const { cocktailId } = useParams();
  const allCocktails = [...cocktails, ...(searchResults || [])];
  const filteredCocktail = allCocktails.find((oneCocktail) => {
    return oneCocktail.idDrink == cocktailId || oneCocktail.id == cocktailId;
  });

  if (!filteredCocktail) {
    return <p>loading...</p>;
  }

  return (
    <div className="cocktail-detail">
      <CocktailCard cocktail={filteredCocktail} />
      <div className="cocktail-detail-buttons">
        {!orderedCocktails.includes(filteredCocktail) ? (
          <button
            onClick={() => {
              handleOrder(filteredCocktail);
            }}
          >
            Order
          </button>
        ) : (
          <button>Ordered ✔</button>
        )}
        <Link to="/your-table">
          <button>Check your orders</button>
        </Link>
        {!filteredCocktail.isUserCreated ? null : (
          <Link to={`/edit-cocktail/${filteredCocktail.id}`}>
            <button>Edit</button>
          </Link>
        )}
        {!filteredCocktail.isUserCreated ? null : <button onClick={() => handleDelete(filteredCocktail.id)}>Delete</button>}
      </div>
    </div>
  );
};

export default CocktailDetail;
