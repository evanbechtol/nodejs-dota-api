<h2>Node.js Wrapper for DOTA2 API</h2>
<div class="container-fluid">
  <div class="col-xs-12">
    <p class="col-xs-12">A wrapper for the DOTA2 API, provided by Valve. Consider this to be in alpha stage, but I am actively working on enhancing the capabilities and clarity of implementation. Ultimately, this will be an entire implementation, and will include the ability to easily integrate a Mongo database, as well as a front-end Using <code>angular.js</code>.
    <br/>
    <h3>Current functionality includes:</h3>
    <ul>
      <li><strong>GetMatchHistory:</strong> Returns the latest 25 public matches in JSON format.</li>
      <li><strong>GetMatchDetails:</strong> Returns the match requested, identified by the <code>match_id</code> provided.</li>
    </ul></p>
    <hr>
     <h3>Functionality in development:</h3>
    <ul>
      <li><strong>GetPlayerSummaries:</strong> Returns a summary of a player using the Steam API call. This is used to retrieve the <code>account_id</code>, which is mapped to a specific player and identifies each player in DOTA2 matches.
        <ul>
          <li><strong>convert32to64:</strong> Converts the player <code>account_id</code> to their corresponding <code>steam_id</code> to lookup their Profile and retrieve their player name, or other related information.</li>
          <li><strong>convert64to32:</strong> Converts the player <code>steam_id</code> to their corresponding <code>account_id</code> that is referenced in DOTA2 match data using the <strong>GetMatchHistory</strong> and <strong>GetMatchDetails</strong> API calls.</li>
        </ul></li>
        
      <li><strong>GetGameItems:</strong> Retrieves the list of game items and their associated ID's. This can then be mapped to the item names for displaying their information.</li>
      <li><strong>GetHeroes:</strong> Retrieves the list of heroes and their associated ID's. This can then be mapped to the hero names for displaying their information.</li>
    </ul></p>
  </div>
</div>
