//input array
let array  = [
  { chartId: '123', name: 'aaa', description: ''},
  { chartId: '123', name: 'pqr', description: ''},
  { chartId: '555', name: 'xyz', description: ''}
]

//expected output result 
const expectedResult = [
  {
    '123': [
      { name: 'aaa', description: ''},
      { name: 'pqr', description: ''}
    ]
  },
  {
    '555':[
      { name: 'xyz', description: ''}
    ]
  }
]

/**
 * Answer: 
 */

/**
 * u => user
 * r => rest
 * a => array
 */

const result = [];
//is user found in result
const isUserFoundWithChartId = id => result.find((u) => Object.keys(u)[0] === id);
//collect user data of given chartId
const collectUserDataWithChartId = id => array.filter((u) => u.chartId === id)
//clone array and remove chartId from each object
const cloneArrayWithoutChartId = a => a.map(u => (({ chartId, ...r }) => r)(u))
//generate result in required format
array.forEach(u => {
  if(!isUserFoundWithChartId(u.chartId))
    result.push({ [u.chartId]: cloneArrayWithoutChartId(collectUserDataWithChartId(u.chartId)) })
})
console.log(JSON.stringify(result))