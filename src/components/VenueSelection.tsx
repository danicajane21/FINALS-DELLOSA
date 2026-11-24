import { useState } from "react";

interface Item {
  name: string;
  cost: number;
  qty: number;
  image: string;
}

interface ProductSelectionPageProps {
  onBack: () => void;
}

type Category = "venue" | "addons" | "meals";

export default function ProductSelectionPage({ onBack }: ProductSelectionPageProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [people, setPeople] = useState(30);
  const [activeCategory, setActiveCategory] = useState<Category>("venue");

  const [rooms, setRooms] = useState<Item[]>([
    {
      name: "Conference Room (Capacity: 15)",
      cost: 1500,
      qty: 0,
      image: "https://www.tagvenue.com/resize/202506/79/1e/widen-1680-noupsize;97151-pink-room-room-VaJ7trXk.jpg",
    },
    {
      name: "Auditorium Hall (Capacity: 200)",
      cost: 5500,
      qty: 0,
      image: "https://static.vecteezy.com/system/resources/previews/027/636/841/non_2x/empty-pink-cinema-hall-view-of-empty-cinema-screen-with-rpink-chairs-photo.jpg",
    },
    {
      name: "Presentation Room (Capacity: 50)",
      cost: 3500,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0u6UihsH7gYVTujPHvyXFhntYwVgmfxWo5HHdZ_iEDhIg1-TYOgAYZFNF&s=10",
    },
    {
      name: "Large Meeting Room (Capacity: 10)",
      cost: 1000,
      qty: 0,
      image: "https://www.tagvenue.com/resize/202505/0e/7e/widen-1680-noupsize;23036-artotel-london-battersea-power-station-venue.jpg",
    },
    {
      name: "Small Meeting Room (Capacity: 5)",
      cost: 800,
      qty: 0,
      image: "https://www.shutterstock.com/image-illustration/contemporary-meeting-room-pink-office-260nw-2607994753.jpg",
    },
    {
      name: "Outdoor Garden (Capacity: 100)",
      cost: 4000,
      qty: 0,
      image: "https://img.partyslate.com/photos/2614477/photo-9a892aac-9002-4242-9681-a4699af1b5f8.JPG?tr=cp-true",
    }
  ]);

  const [addons, setAddons] = useState<Item[]>([
    {
      name: "Projectors",
      cost: 200,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatJRMaKHwPbuLMzU-P6ysIbCAVJtgTmjmyElxVUL49Q&s=10",
    },
    {
      name: "Speaker",
      cost: 35,
      qty: 0,
      image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/6950376717764.1.jpg?v=1684463744&width=1200",
    },
    {
      name: "Microphones",
      cost: 45,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLSJ56dsBQC4wYgDZs7joS-YW3u4BF9hbTaJnsj7f6gw&s",
    },
    {
      name: "Whiteboards",
      cost: 80,
      qty: 0,
      image: "https://officeworks-dcn.sgp1.digitaloceanspaces.com/2020/01/WHITE-BOARD.jpg",
    },
    {
      name: "Signage",
      cost: 80,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxuTrsD19-NLW0b9UoZtdrFDofYKsZIhKVeJbc7y0tvqrVmY0JpGhyj8&s=10",
    },
    {
      name: "Lighting",
      cost: 150,
      qty: 0,
      image: "https://thumbs.dreamstime.com/b/lighting-fixture-2753894.jpg",
    }
    
  ]);

  const [meals, setMeals] = useState([
    { name: "Breakfast", cost: 50, selected: false },
    { name: "High Tea", cost: 25, selected: false },
    { name: "Lunch", cost: 65, selected: false },
    { name: "Dinner", cost: 70, selected: false },
  ]);

  const updateQty = (
    list: Item[],
    setList: React.Dispatch<React.SetStateAction<Item[]>>,
    index: number,
    delta: number
  ) => {
    const updated = [...list];
    updated[index].qty = Math.max(0, updated[index].qty + delta);
    setList(updated);
  };

  const roomTotal = rooms.reduce((sum, r) => sum + r.cost * r.qty, 0);
  const addonTotal = addons.reduce((sum, a) => sum + a.cost * a.qty, 0);
  const mealTotal = meals.reduce((sum, m) => (m.selected ? sum + m.cost * people : sum), 0);
  const grandTotal = roomTotal + addonTotal + mealTotal;

  return (
    <div className="planner-page">
      <header className="navbar">
        <strong>Aura & Co. Planner</strong>
        <nav className="nav-links">
          <button className="back-btn" onClick={onBack}>
            Back to Home
          </button>
          <div className="category-tabs" aria-label="Planner categories">
            <button
              className={`category-tab ${activeCategory === "venue" ? "active" : ""}`}
              aria-pressed={activeCategory === "venue"}
              onClick={() => setActiveCategory("venue")}
            >
              Venue
            </button>
            <button
              className={`category-tab ${activeCategory === "addons" ? "active" : ""}`}
              aria-pressed={activeCategory === "addons"}
              onClick={() => setActiveCategory("addons")}
            >
              Add-ons
            </button>
            <button
              className={`category-tab ${activeCategory === "meals" ? "active" : ""}`}
              aria-pressed={activeCategory === "meals"}
              onClick={() => setActiveCategory("meals")}
            >
              Meals
            </button>
          </div>
          <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </nav>
      </header>

      <main className="planner-content">
        {showDetails && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h2>TOTAL COST FOR THE EVENT: ${grandTotal}</h2>
              <table className="summary-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Unit Cost</th>
                    <th>Quantity</th>
                    <th>Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.filter((r) => r.qty > 0).map((r) => (
                    <tr key={r.name}>
                      <td>{r.name}</td>
                      <td>P{r.cost}</td>
                      <td>{r.qty}</td>
                      <td>P{r.cost * r.qty}</td>
                    </tr>
                  ))}
                  {addons.filter((a) => a.qty > 0).map((a) => (
                    <tr key={a.name}>
                      <td>{a.name}</td>
                      <td>P{a.cost}</td>
                      <td>{a.qty}</td>
                      <td>P{a.cost * a.qty}</td>
                    </tr>
                  ))}
                  {meals.filter((m) => m.selected).map((m) => (
                    <tr key={m.name}>
                      <td>{m.name}</td>
                      <td>P{m.cost}</td>
                      <td>For {people} people</td>
                      <td>P{m.cost * people}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="close-btn" onClick={() => setShowDetails(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        {activeCategory === "venue" && <section className="section-block">
          <h2 className="section-header">Venue Room Selection</h2>
          <div className="card-grid">
            {rooms.map((room, i) => (
              <div className="item-card" key={room.name}>
                <img className="item-image" src={room.image} alt={room.name} loading="lazy" />
                <h4>{room.name}</h4>
                <p>P{room.cost}</p>
                <div className="qty-controls">
                  <button onClick={() => updateQty(rooms, setRooms, i, -1)}>-</button>
                  <span>{room.qty}</span>
                  <button onClick={() => updateQty(rooms, setRooms, i, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="subtotal-box">Total Cost: P{roomTotal}</div>
        </section>}

        {activeCategory === "addons" && <section className="section-block">
          <h2 className="section-header">Add-ons Selection</h2>
          <div className="card-grid">
            {addons.map((addon, i) => (
              <div className="item-card" key={addon.name}>
                <img className="item-image" src={addon.image} alt={addon.name} loading="lazy" />
                <h4>{addon.name}</h4>
                <p>P{addon.cost}</p>
                <div className="qty-controls">
                  <button onClick={() => updateQty(addons, setAddons, i, -1)}>-</button>
                  <span>{addon.qty}</span>
                  <button onClick={() => updateQty(addons, setAddons, i, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="subtotal-box">Total Cost: P{addonTotal}</div>
        </section>}

        {activeCategory === "meals" && <section className="section-block">
          <h2 className="section-header">Meals Selection</h2>
          <div className="people-input">
            <label>
              Number of People:{" "}
              <input
                type="number"
                min={1}
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
              />
            </label>
          </div>
          <div className="meals-grid">
            {meals.map((meal, i) => (
              <label className="meal-card" key={meal.name}>
                <input
                  type="checkbox"
                  checked={meal.selected}
                  onChange={() => {
                    const updated = [...meals];
                    updated[i].selected = !updated[i].selected;
                    setMeals(updated);
                  }}
                />
                <span>{meal.name} (P{meal.cost})</span>
              </label>
            ))}
          </div>
          <div className="subtotal-box">Total Cost: P{mealTotal}</div>
        </section>}
      </main>
    </div>
  );
}
