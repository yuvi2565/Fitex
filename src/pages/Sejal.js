import './Diet.css';

function Diet() {
  return (
    <div>
      <header>
        <img src="images/banner-healthy-food.jpg" alt="Healthy Food Banner" />
        <h1>Discover Delicious and Healthy Eating Made Easy</h1>
        <p>Get fit, feel energized, and reach your goals with a plan tailored just for you.</p>
      </header>

      <section class="form-section">
        <h2>Tell Us About You</h2>
        <form action="process-form.php" method="post"> <fieldset>
          <legend>Dietary Preferences</legend>
          <div>
            <label for="diet-type">Do you follow a specific diet?</label><br />
            <label><input type="radio" name="diet-type" value="vegetarian" id="vegetarian" /> Vegetarian</label><br />
            <label><input type="checkbox" name="restrictions[]" value="vegan" /> Lacto-ovo-vegetarian</label><br />
            <label><input type="checkbox" name="restrictions[]" value="vegan" /> Lacto-vegetarian</label><br />
            <label><input type="checkbox" name="restrictions[]" value="vegan" /> Ovo-vegetarian </label><br />
            <label><input type="radio" name="diet-type" value="non-vegetarian" id="non-vegetarian" /> Non-Vegetarian</label><br />
            <label><input type="checkbox" name="restrictions1[]" value="vegan1" /> Flexitarian</label><br />
            <label><input type="checkbox" name="restrictions1[]" value="vegan1" /> Pescatarian</label><br />
          </div>
          <div>
            
          </div>
        </fieldset>

          <fieldset>
            <legend>What are your health goals?</legend>
            <select name="health-goals">
              <option value="lose-weight">Lose Weight</option>
              <option value="maintain-weight">Maintain Weight</option>
              <option value="gain-muscle">Gain Muscle</option>
              <option value="improve-health">Improve Overall Health</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>What are your favorite foods?</legend>
            <label><input type="checkbox" name="favorites[]" value="fruits" /> Fruits</label><br />
            <label><input type="checkbox" name="favorites[]" value="vegetables" /> Vegetables</label><br />
            <label><input type="checkbox" name="favorites[]" value="proteins" /> Proteins</label><br />
            <label><input type="checkbox" name="favorites[]" value="grains" /> Grains</label><br />
            <label for="dislikes">Any dislikes or allergies?</label><br />
            <textarea name="dislikes" id="dislikes" rows="3"></textarea>
          </fieldset>

          <button type="submit">Get My Diet Plan</button>

        </form>
      </section>
    </div>
  );
}

export default Diet;
