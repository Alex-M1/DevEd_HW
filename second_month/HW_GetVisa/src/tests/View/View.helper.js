export const
  dom = `
    <div class="container">
    <div class="app">
      <div class="candidate">
        <div class="candidate__row candidate__name">
          <span>Name</span>
          <input type="text" placeholder="Enter name..." id="entName">
          <button class="btn candidate__row-btn" id="genName">Generate</button>
        </div>
        <div class="candidate__row candidate__balance">
          <span>Balance</span>
          <input type="text" placeholder="Enter balance..." id="entBalance">
          <button class="btn candidate__row-btn" id="genBalance">Generate</button>
        </div>
        <div class="candidate__row candidate__age">
          <span>Age</span>
          <input type="text" placeholder="Enter age..." id="entAge">
          <button class="btn candidate__row-btn" id="genAge">Generate</button>
        </div>
        <div class="candidate__row candidate__documents">
          <span>Documents</span>
          <div>
            <div class="candidate__documents-document">
              <label for="passport">Passport</label>
              <input type="checkbox" class="document" id="passport">
            </div>
            <div class="candidate__documents-document">
              <label for="insurance">Insurance</label>
              <input type="checkbox" class="document" id="insurance">
            </div>
            <div class="candidate__documents-document">
              <label for="photo">Photo</label>
              <input type="checkbox" class="document" id="photo">
            </div>
          </div>

          <button class="btn candidate__row-btn" id="genDocuments">Generate</button>
        </div>
        <div class="candidate__row candidate__english">
          <span>English level</span>
          <select id="entEn">
            <option value="a1">A1</option>
            <option value="a2">A2</option>
            <option value="a2+">A2+</option>
            <option value="b1">B1</option>
            <option value="b2">B2</option>
            <option value="c1">C1</option>
            <option value="c2">C2</option>
          </select>
          <button class="btn candidate__row-btn" id="genEn">Generate</button>
        </div>
        <div class="candidate__message"></div>
      </div>
      <div class="control-panel">
        <div class="control-panel__row">
          <button class="btn control-panel__btn" id="generateAll">Generate All</button>
          <button class="btn control-panel__btn" id="add">Add Candidate</button>
          <button class="btn control-panel__btn" id="init">Init</button>
        </div>
        <div class="control-panel__row">
          <button class="btn control-panel__btn" id="race">Race</button>
          <button class="btn control-panel__btn" id="clear">Clear</button>
        </div>
      </div>
      <canvas width="1200" height="800"></canvas>
    </div>

    </div>
  `,
  candidate = [{
    name: 'Alex',
    balance: '2000',
    age: 26,
    documents: [true, true, true],
    enLvl: 'b2'
  },
  {
    name: 'John',
    balance: '1000',
    age: 72,
    documents: [false, true, true],
    enLvl: 'a1'
  }];