document.addEventListener("DOMContentLoaded", function() {

const phone = "27786221300";

const products = {
  // SINGLE ITEMS
  activoviteVP60Cap: { name: "Activovite Value Pack - 60 Capsules", price: 139.99, active: true },
  actorvitKS200ml: { name: "ActorVit Kiddy Syrup - 200ml", price: 84.99, active: false },
  adcomayogelAS200ml: { name: "Adco-Mayogel Antacid Suspension - 200ml", price: 44.99, active: false },
  adcoN100ml: { name: "Adco-Napamol - 100ml", price: 19.50, active: false },
  alkafizzMB120g: { name: "AlkaFizz Mixed Berry - 120g", price: 59.99, active: false },
  ashtonparsonsIP20Sac: { name: "Ashton & Parsons Infant Powders - 20 Sachets", price: 52.50, active: false },
  avogelP30Cap: { name: "A. Vogel Prostasan - 30 Capsules", price: 399.99, active: true },
  bbsm1Tab: { name: "Bang Bang Strongman - 1 Tablets", price: 33.90, active: false },
  bCalDS30Tab: { name: "B-Cal-D Swallow - 30 Tablets", price: 109.50, active: false },
  benylin4FL200ml: { name: "Benylin 4 Flu Liquid - 200ml", price: 104.99, active: false },
  beroccaboost10Eff: { name: "Berocca Boost - 10 Effervescent", price: 79.90, active: false },
  blistexDLM7g: { name: "Blistex DCT Lip Moisturiser - 7g", price: 99.99, active: false },
  calcvitaIS10Eff: { name: "Cal-C-Vita Immune Support - 10 Effervescent", price: 59.99, active: false },
  calpol24Tab: { name: "Calpol - 24 Tablets", price: 29.99, active: false },
  calpolPS100ml: { name: "Calpol Paediatric Suspension - 100ml", price: 60.99, active: false },
  calpolPS50ml: { name: "Calpol Paediatric Suspension - 50ml", price: 39.99, active: false },
  cancard30Tab: { name: "Cancard - 30 Tablets", price: 54.99, active: false },
  carebysparCCBW500ml: { name: "Care by SPAR Cream Caress Body Wash - 500ml", price: 34.99, active: false },
  carebysparESBW500ml: { name: "Care by SPAR Evening Star Body Wash - 500ml", price: 34.99, active: false },
  carebysparPEBW500ml: { name: "Care by SPAR Pure Escape Body Wash - 500ml", price: 34.99, active: false },
  caremenbysparA3BR4Raz: { name: "Care Men by SPAR Advance 3 Blade Razor - 4 Razors", price: 49.99, active: true },
  caremenbysparE5BR3Raz: { name: "Care Men by SPAR Extreme 5 Blade Razor - 3 Razors", price: 54.99, active: true },
  caremenbysparDG150ml: { name: "Care Men by SPAR Deodorant Glacier - 150ml", price: 25.99, active: true },
  caremenbysparDL150ml: { name: "Care Men by SPAR Deodorant Lumin - 150ml", price: 25.99, active: true },
  caremenbysparDS150ml: { name: "Care Men by SPAR Deodorant Stone - 150ml", price: 25.99, active: true },
  caremenbysparRB50ml: { name: "Care Men by SPAR Roll-on Bold - 50ml", price: 14.99, active: true },
  caremenbysparRControl50ml: { name: "Care Men by SPAR Roll-on Control - 50ml", price: 14.99, active: true },
  caremenbysparRCool50ml: { name: "Care Men by SPAR Roll-on Cool - 50ml", price: 14.99, active: true },
  caremenbysparSFM250ml: { name: "Care Men by SPAR Shaving Foam Moisturising - 250ml", price: 29.99, active: true },
  caremenbysparSFS250ml: { name: "Care Men by SPAR Shaving Foam Sensitive - 250ml", price: 29.99, active: true },
  caremenbysparSGAC500ml: { name: "Care Men by SPAR Shower Gel Aqua Cool - 500ml", price: 34.99, active: true },
  caremenbysparSGER500ml: { name: "Care Men by SPAR Shower Gel Energy Rush - 500ml", price: 34.99, active: true },
  caremenbysparSGES500ml: { name: "Care Men by SPAR Shower Gel Extreme Sport - 500ml", price: 34.99, active: true },
  centrumA30Tab: { name: "Centrum Adult - 30 Tablets", price: 144.99, active: false },
  centrumE30Tab: { name: "Centrum Energy - 30 Tablets", price: 179.99, active: true },
  centrumM30Tab: { name: "Centrum Men - 30 Tablets", price: 179.99, active: true },
  cepacolB24Loz: { name: "Cepacol Blackcurrant - 24 Lozenges", price: 59.99, active: false },
  cepacolHL24Loz: { name: "Cepacol Honey & Lemon - 24 Lozenges", price: 59.99, active: false },
  cepacolR24Loz: { name: "Cepacol Regular - 24 Lozenges", price: 59.99, active: false },
  cerumolED10ml: { name: "Cerumol Ear Drops - 10ml", price: 104.50, active: false },
  citrosoda30Sac: { name: "Citro-Soda - 30 Sachets", price: 99.50, active: false },
  contourP50Str: { name: "Contour Plus - 50 Strips", price: 155.90, active: false },
  dermadineAO25g: { name: "Dermadine Antiseptic Ointment - 25g", price: 49.90, active: false },
  disprinES16Tab: { name: "Disprin Extra Strength - 16 Tablets", price: 19.99, active: false },
  drLeePR2Pat: { name: "Dr. Lee Pain Relief - 2 Patches", price: 21.50, active: false },
  ds24MM30Cap: { name: "DS-24 Multivitamin & Mineral - 30 Capsules", price: 104.99, active: true },
  dulcolax10Tab: { name: "Dulcolax - 10 Tablets", price: 47.90, active: false },
  efferfluCIB20Eff: { name: "Efferflu C Immune Booster - 20 Effervescent", price: 99.99, active: false },
  enoR10Sac: { name: "Eno Regular - 10 Sachets", price: 64.50, active: false },
  epimaxBJC400g: { name: "Epi-Max Baby & Junior Cream - 400g", price: 92.90, active: false },
  epimaxOC400g: { name: "Epi-Max Original Cream - 400g", price: 84.99, active: true },
  essentialeELC20Cap: { name: "Essentiale Extreme Liver Care - 20 Capsules", price: 64.99, active: true },
  eucerinAB45g: { name: "Eucerin Aquaphor Balm - 45g", price: 119.99, active: false },
  ferofolIS30Cap: { name: "Ferofol Iron Supplement - 30 Capsules", price: 71.50, active: false },
  ferrousforteIS30Tab: { name: "Ferrous Forte Iron Supplement - 30 Tablets", price: 159.90, active: false },
  gastropectT100ml: { name: "Gastropect Toffee - 100ml", price: 49.50, active: false },
  gavisconDA12Sac: { name: "Gaviscon Double Action - 12 Sachets", price: 96.50, active: false },
  gavisconDA8Tab: { name: "Gaviscon Double Action - 8 Tablets", price: 24.90, active: false },
  grandpaHP12Sti: { name: "Grand-Pa Headache Powder - 12 Stick Packs", price: 39.99, active: false },
  grandpaHP38Sti: { name: "Grand-Pa Headache Powder - 38 Stick Packs", price: 94.99, active: false },
  hardrockC1Sac: { name: "Hard Rock Coffee - 1 Sachet", price: 45.90, active: false },
  hlalaUphilileIS30Cap: { name: "Hlala Uphilile Immune Support- 30 Capsules", price: 76.90, active: false },
  iberogastOL20ml: { name: "Iberogast Oral Liquid - 20ml", price: 99.99, active: false },
  johnsonsBWES56Wip: { name: "Johnson's Baby Wipes Extra Sensitive - 56 Wipes", price: 19.90, active: false },
  kalvoquick4kg: { name: "Kalvoquick - 4kg", price: 324.50, active: false },
  karvolDI10Cap: { name: "Karvol Decongestant Inhalation - 10 Capsules", price: 89.99, active: false },
  kezS80ml: { name: "Kez Shampoo - 80ml", price: 95.50, active: false },
  lacsonS150ml: { name: "Lacson Syrup - 150ml", price: 69.99, active: false },
  lifegainV300g: { name: "Lifegain Vanilla - 300g", price: 215.50, active: false },
  linctagonCC20Eff: { name: "Linctagon-C Cherry - 20 Effervescent", price: 129.99, active: false },
  linctagonCO20Eff: { name: "Linctagon-C Orange - 20 Effervescent", price: 129.99, active: false },
  linctagonCJCFS100ml: { name: "Linctagon-C Junior Cold & Flu Syrup - 100ml", price: 79.99, active: false },
  linctagonCJB12Eff: { name: "Linctagon-C Junior Berry - 12 Effervescent", price: 104.99, active: true },
  linctagonCJO12Eff: { name: "Linctagon-C Junior Orange - 12 Effervescent", price: 104.99, active: true },
  linctagonCPN200O12Eff: { name: "Linctagon-C Plus NAC200 Orange - 12 Effervescent", price: 139.99, active: false },
  marshallsED20ml: { name: "Marshalls Earache Drops - 20ml", price: 39.90, active: false },
  medEEnlarge30Cap: { name: "Med-E-Enlarge - 30 Capsules", price: 129.50, active: false },
  medlemonC8Sac: { name: "Med-Lemon Cherry - 8 Sachets", price: 69.99, active: false },
  medlemonL8Sac: { name: "Med-Lemon Lemon - 8 Sachets", price: 69.99, active: false },
  medlemonO8Sac: { name: "Med-Lemon Original - 8 Sachets", price: 69.99, active: false },
  menacal730Tab: { name: "MenaCal 7 - 30 Tablets", price: 139.90, active: false },
  nativaMFM60Cap: { name: "Nativa Multivitamin for Men - 60 Capsules", price: 164.99, active: true },
  nativaPS60Cap: { name: "Nativa Prostate Support - 60 Capsules", price: 229.99, active: true },
  nativaVC30Cap: { name: "Nativa Vitamin C - 30 Capsules", price: 74.99, active: true },
  niveaMDBL400ml: { name: "Nivea Men Deep Body Lotion - 400ml", price: 74.99, active: true },
  niveaMCKR50ml: { name: "Nivea Men Cool Kick Roll-on - 50ml", price: 29.99, active: true },
  niveaMIBWR50ml: { name: "Nivea Men Invisible Black & White Roll-on - 50ml", price: 29.99, active: true },
  niveaMSSG250ml: { name: "Nivea Men Sensitive Shaving Gel - 250ml", price: 94.99, active: true },
  nurofenFC4O100ml: { name: "Nurofen for Children 4% Orange - 100ml", price: 139.99, active: false },
  nurofenFC4S100ml: { name: "Nurofen for Children 4% Strawberry - 100ml", price: 139.99, active: false },
  panado20Cap: { name: "Panado - 20 Capsules", price: 44.99, active: false },
  panado24Tab: { name: "Panado - 24 Tablets", price: 32.90, active: false },
  panadoPSPM50ml: { name: "Panado Peppermint Paediatric Syrup - 50ml", price: 34.99, active: false },
  panadoPSSB50ml: { name: "Panado Strawberry Paediatric Syrup - 50ml", price: 34.99, active: false },
  pcC10Eff: { name: "PC Calcium 500 - 10 Effervescent", price: 33.50, active: false },
  pharmacyatsparAC30Cap: { name: "Pharmacy at SPAR Activated Charcoal - 30 Capsules", price: 44.99, active: false },
  pharmacyatsparBP3Pla: { name: "Pharmacy at SPAR Boil Plasters - 3 Plasters", price: 19.90, active: false },
  pharmacyatsparCTBeige5cmx45m: { name: "Pharmacy at SPAR Cohesive Tape Beige - 5cmx4.5m", price: 29.99, active: false },
  pharmacyatsparCTBlack5cmx45m: { name: "Pharmacy at SPAR Cohesive Tape Black - 5cmx4.5m", price: 29.99, active: false },
  pharmacyatsparFM60Cap: { name: "Pharmacy at SPAR Family Multivitamin - 60 Capsules", price: 74.99, active: false },
  pharmacyatsparHABK: { name: "Pharmacy at SPAR Handy Aid - Burn Kit", price: 54.99, active: false },
  pharmacyatsparHAPK: { name: "Pharmacy at SPAR Handy Aid - Plaster Kit", price: 54.99, active: false },
  pharmacyatsparKMGR60Gum: { name: "Pharmacy at SPAR Kids Multivitamin Gummies Raspberry - 60 Gummies", price: 69.99, active: false },
  pharmacyatsparLS20Cap: { name: "Pharmacy at SPAR Liver Support - 20 Capsules", price: 49.99, active: true },
  pharmacyatsparVBC60Cap: { name: "Pharmacy at SPAR Vitamin B-Complex - 60 Capsules", price: 79.99, active: false },
  phippsMM100ml: { name: "Phipp's Milk of Magnesia - 100ml", price: 64.50, active: false },
  pregomegaPS30Tab: { name: "PregOmega Pregnancy Support - 30 Day Pack Tablets", price: 309.99, active: false },
  prepDPC100g: { name: "Prep Derma Protective Cream - 100g", price: 84.99, active: true },
  probifloraIR9S30Cap: { name: "ProbiFlora Intensive Rescue 9 Strain - 30 Capsules", price: 144.99, active: false },
  procydin60Cap: { name: "Procydin - 60 Capsules", price: 139.50, active: false },
  prospanCS100ml: { name: "Prospan Cough Syrup - 100ml", price: 70.90, active: false },
  prostavorPH60Cap: { name: "Prostavor Prostate Health - 60 Capsules", price: 199.99, active: true },
  quadroferIS30Sac: { name: "Quadrofer Iron Supplement - 30 Sachets", price: 354.90, active: false },
  rehidratB6Sac: { name: "Rehidrat Blackcurrant - 6 Sachets", price: 79.99, active: false },
  rehidratO6Sac: { name: "Rehidrat Orange - 6 Sachets", price: 79.99, active: false },
  reitzerACJ500g: { name: "Reitzer Aqueous Cream Jar - 500g", price: 34.99, active: false },
  scottsEO100ml: { name: "Scott's Emulsion Orange - 100ml", price: 77.90, active: false },
  scottsER100ml: { name: "Scott's Emulsion Regular - 100ml", price: 77.90, active: false },
  slowmag30Cap: { name: "Slow-Mag - 30 Capsules", price: 164.99, active: false },
  slowmag10Eff: { name: "Slow-Mag - 10 Effervescent", price: 79.99, active: false },
  sparAC500g: { name: "SPAR Aqueous Cream - 500g", price: 24.99, active: false },
  sparAI10SP: { name: "SPAR Adult Incontinence - 10 Slips & Pants", price: 129.90, active: false },
  sparGSBL175g: { name: "SPAR Germex Soap Bergamont and Lime - 175g", price: 11.99, active: true },
  sparGSH175g: { name: "SPAR Germex Soap Herbal - 175g", price: 11.99, active: true },
  sparGSSM175g: { name: "SPAR Germex Soap Sea Mist - 175g", price: 11.99, active: true },
  sparGSS175g: { name: "SPAR Germex Soap Sport - 175g", price: 11.99, active: true },
  sparLW24Wip: { name: "SPAR Lens Wipes - 24 Wipes", price: 20.99, active: false },
  sparPT10Tis: { name: "SPAR Pocket Tissues - 10 Tissues", price: 24.99, active: true },
  sparSGC200ml: { name: "SPAR Shaving Gel Cool - 200ml", price: 59.99, active: true },
  sparSGS200ml: { name: "SPAR Shaving Gel Sensitive - 200ml", price: 59.99, active: true },
  sparsolaAG125ml: { name: "SPAR Sola Aftersun Gel - 125ml", price: 64.99, active: false },
  sparTT2P18Rol: { name: "SPAR Toilet Tissue 2 Ply - 18 Rolls", price: 119.90, active: false },
  sterimarBNHS50ml: { name: "Sterimar Baby Nasal Hygiene Spray - 50ml", price: 229.99, active: false },
  sterimarNHS50ml: { name: "Sterimar Nasal Hygiene Spray - 50ml", price: 184.99, active: false },
  strepsilsEM24Loz: { name: "Strepsils Eucalyptus Menthol - 24 Lozenges", price: 79.99, active: false },
  strepsilsHL24Loz: { name: "Strepsils Honey & Lemon - 24 Lozenges", price: 79.99, active: false },
  strepsilsOVC24Loz: { name: "Strepsils Orange with Vitamin C - 24 Lozenges", price: 79.99, active: false },
  strepsilsO24Loz: { name: "Strepsils Original - 24 Lozenges", price: 79.99, active: false },
  strepsilsWG24Loz: { name: "Strepsils Warm Ginger - 24 Lozenges", price: 79.99, active: false },
  strepsilsHL8Loz: { name: "Strepsils Honey & Lemon - 8 Lozenges", price: 43.50, active: false },
  strepsilsOVC8Loz: { name: "Strepsils Orange with Vitamin C - 8 Lozenges", price: 43.50, active: false },
  sudocremBC125g: { name: "Sudocrem Barrier Cream - 125g", price: 124.99, active: false },
  telamentPCD30ml: { name: "Telament Paediatric Colic Drops - 30ml", price: 139.90, active: false },
  thriveA90Cap: { name: "Thrive Alkaline - 90 Capsules", price: 119.90, active: false },
  thriveJC60Tab: { name: "Thrive Joint Complex - 60 Tablets", price: 169.50, active: false },
  tibbS24Loz: { name: "Tibb Septogard - 24 Lozenges", price: 64.99, active: false },
  tibbS60Tab: { name: "Tibb Septogard - 60 Tablets", price: 159.99, active: false },
  tibbSA60Tab: { name: "Tibb Stress-away - 60 Tablets", price: 179.99, active: true },
  tibbSS100ml: { name: "Tibb Septogard Syrup - 100ml", price: 129.99, active: false },
  transact5Pat: { name: "Transact - 5 Patches", price: 104.99, active: false },
  twinsaverFM36Tis: { name: "Twinsaver for Men - 36 Tissues", price: 29.99, active: true },
  ultimagA10Eff: { name: "Ultimag Advanced - 10 Effervescent", price: 77.50, active: false },
  usnFGA60Tab: { name: "USN Fast Grow Aminos - 60 Tablets", price: 134.99, active: true },
  usnPCMP200g: { name: "USN Pure Creatine Monohydrate Powder - 200g", price: 189.99, active: true },
  vascamenU30Tab: { name: "Vascamen Ultra - 30 Tablets", price: 189.99, active: true },
  vasq1030Cap: { name: "VasQ10 - 30 Capsules", price: 189.99, active: true },
  vicksAWDCS200ml: { name: "Vicks Acta Plus Wet + Dry Cough Syrup - 200ml", price: 104.99, active: false },
  vicksAWDCS50ml: { name: "Vicks Acta Plus Wet + Dry Cough Syrup - 50ml", price: 43.50, active: false },
  vicksBJ45g: { name: "Vicks BabyRub Jar - 45g", price: 49.99, active: false },
  vicksVJ50g: { name: "Vicks VapoRub Jar - 50g", price: 54.99, active: false },
  voltarenE20g: { name: "Voltaren Emulgel - 20g", price: 73.50, active: false },
  voltarenE50g: { name: "Voltaren Emulgel - 50g", price: 129.99, active: false },
  voltarenE12H50g: { name: "Voltaren Emulgel 12 Hour - 50g", price: 229.99, active: false },
  wintergreenO25g: { name: "Wintergreen Ointment - 25g", price: 30.50, active: false },

  // VALUE PACKS OR BUY ONE GET ONE
  linctagonCN200Value1plus1: { name: "Linctagon-C NAC200 Buy 1 Get 1 Free", price: 139.99, active: false, bogo: true },
  osteoezeGoldValue90plus30Cap: { name: "OsteoEze Gold - 90 + 30 Capsules", price: 279.90, active: false },
  sparsolaSPF50Value200plus70ml: { name: "SPAR Sola SPF50 Spray - 200+70ml", price: 124.99, active: false }
};

let order = {};

const grid = document.getElementById("productGrid");

for (let key in products) {
  
  if (!products[key].active) continue;
  
  const product = products[key];

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="price">Only<br>R${product.price.toFixed(2)}</div>
    <img src="images/${key}.png">
    <div class="name">${product.name}</div>
    <div class="qty">
      <button onclick="changeQty('${key}',-1)">−</button>
      <span id="qty-${key}">0</span>
      <button onclick="changeQty('${key}',1)">+</button>
    </div>
  `;

  grid.appendChild(card);
}

window.changeQty = function(key, delta) {
  order[key] = (order[key] || 0) + delta;
  if (order[key] < 0) order[key] = 0;
  document.getElementById("qty-" + key).innerText = order[key];
}

window.sendOrder = function() {
  let message = "Hello, I would like to order:\n";
  let total = 0;
  let hasItems = false;

  for (let key in order) {
    if (order[key] > 0) {
      message += `- ${products[key].name} x${order[key]}\n`;
      if (products[key].bogo) {
        const qty = order[key];
        const chargedQty = Math.ceil(qty / 2);
        total += products[key].price * chargedQty;
      } else {
        total += products[key].price * order[key];
      }
      hasItems = true;
    }
  }

  if (!hasItems) {
    alert("Please select at least one item.");
    return;
  }

  message += `\n\nTotal: R${total.toFixed(2)}`;

  window.open(
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
    "_blank"
  );
}

});
