// modules/feature-mapping.js

let featureRanges = {
  headRotation: { min: null, max: null },
  mouthOpen: { min: null, max: null },
  browRaise: { min: null, max: null },
  handVertical: { min: null, max: null },
};

let currentAssignments = {
  headRotation: 20,
  mouthOpen: 21,
  browRaise: 22,
  handVertical: 23,
};

let selectedFeature = null;
let midiOut = null;

export function setMIDIOut(port) {
  midiOut = port;
}

export function handleShortcut(key, modifier) {
  const keyMap = {
    r: 'headRotation',
    m: 'mouthOpen',
    b: 'browRaise',
    h: 'handVertical',
  };

  if (keyMap[key]) {
    selectedFeature = keyMap[key];
    if (modifier === 'i') {
      featureRanges[selectedFeature].min = lastValueOf(selectedFeature);
    } else if (modifier === 'o') {
      featureRanges[selectedFeature].max = lastValueOf(selectedFeature);
    }
    showStatus(`Set ${modifier === 'i' ? 'min' : 'max'} for ${selectedFeature}`, 3000);
  }
}

export function scaleAndSend(feature, value) {
  const range = featureRanges[feature];
  if (range.min === null || range.max === null) return;

  const scaled = Math.max(0, Math.min(127, Math.floor(
    ((value - range.min) / (range.max - range.min)) * 127
  )));

  const cc = currentAssignments[feature];
  if (midiOut && cc != null) {
    midiOut.send([0xB0, cc, scaled]);
  }
}

function lastValueOf(feature) {
  // This is a placeholder. Replace with actual last computed feature value.
  return currentFeatureValues[feature] || 0;
}

let currentFeatureValues = {
  headRotation: 0,
  mouthOpen: 0,
  browRaise: 0,
  handVertical: 0,
};

export function updateFeatureValues(values) {
  Object.assign(currentFeatureValues, values);
  for (let feature in values) {
    scaleAndSend(feature, values[feature]);
  }
}
