import React from 'react'

const _map = {
  red: <div className="colors red">  “Good artists copy, great artists steal” Pablo Picasso</div>,
  yellow: <div className="colors yellow"> “Art is the lie that enables us to realize the truth” Pablo Picasso</div>,
  blue: <div className="colors blue"> “If I don't have red, I use blue” Pablo Picasso</div>,
}

export default function Deadlines() {
  const [selected, select] = React.useState('blue')
  const onChange = (e) => select(e.target.value)
  return (
    <section id="deadlines">
      <h2>Voting Deadlines</h2>
      <p>Election Day for the 2020 General Election is <strong>Tuesday, November 3rd, 2020</strong>. Though you can still go in person and vote at your local polling place (click here to find yours) on the day of the election, you may prefer to vote by mail due to concerns about Coronavirus (also waiting in line is no fun). Every state is a little different when it comes to voting policies and procedures, so make sure you read up and familiarize yourself with the rules in your state <u>as soon as possible</u>. Click here to find voter information for your state.</p>
      <p>Many states offer early voting, which allows you to skip the crowds and vote in person well ahead of Election Day. Early voting is the best way to stay safe during the pandemic while making sure your vote will be counted. Be aware that although mail-in voting (also known as "absentee voting") is available in every state, some states require you to give a reason why you are unable to vote in person before allowing you to vote by mail. Again, it's best to check and see what your state allows, but mail in voting is not without its own perils!</p>
      <p>Mail-in ballots need to be processed</p>
      <label className="wrapper" htmlFor="states">Choose your state or territory to see voting deadline information:</label>
      <div className="button dropdown">
        <select id="colorselector" value={selected} onChange={onChange}>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <div className="output">
        {selected && _map[selected]}
      </div>
    </section>
  )
}