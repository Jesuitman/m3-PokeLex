describe('PokéLex App', () => {
  beforeEach(() => {
    cy.viewport(1600, 1000)
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/?limit=151", {
      fixture: 'gen1.json'
    })
      .as('getGen1');
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/1/", {
      fixture: 'poke-1-bulbasaur.json'
    })
      .as("getBulbasaur")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/151/", {
      fixture: 'poke-1-mew.json'
    })
      .as("getMew")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151", {
      fixture: 'gen2.json'
    })
      .as('getGen2');
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/152/", {
      fixture: 'poke-2-chickorita.json'
    })
      .as("getChikorita")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/251/", {
      fixture: 'poke-2-celebi.json'
    })
      .as("getCelebi")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251", {
      fixture: 'gen3.json'
    })
      .as('getGen3');
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/252/", {
      fixture: 'poke-3-treecko.json'
    })
      .as("getTreecko")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/386/", {
      fixture: 'poke-3-deoxys-normal.json'
    })
      .as("getDeoxys")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/?limit=107&offset=386", {
      fixture: 'gen4.json'
    })
      .as('getGen4');
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/387/", {
      fixture: 'poke-4-turtwig.json'
    })
      .as("getTurtwig")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/493/", {
      fixture: 'poke-4-arceus.json'
    })
      .as("getArceus")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/?limit=156&offset=493", {
      fixture: 'gen5.json'
    })
      .as('getGen5');
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/494/", {
      fixture: 'poke-5-victini.json'
    })
      .as("getVictini")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/649/", {
      fixture: 'poke-5-genesect.json'
    })
      .as("getGenesect")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/?limit=72&offset=649", {
      fixture: 'gen6.json'
    })
      .as('getGen6');
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/650/", {
      fixture: 'poke-6-chespin.json'
    })
      .as("getChespin")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/721/", {
      fixture: 'poke-6-volcanion.json'
    })
      .as("getVolcanion")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/?limit=88&offset=721", {
      fixture: 'gen7.json'
    })
      .as('getGen7');
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/722/", {
      fixture: 'poke-7-rowlett.json'
    })
      .as("getRowlett")
    cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/809/", {
      fixture: 'poke-7-melmetal.json'
    })
      .as("getMelmetal")
      cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/?limit=96&offset=809", {
        fixture: 'gen8.json'
      })
        .as('getGen8');
      cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/810/", {
        fixture: 'poke-8-grookey.json'
      })
        .as("getGrookey")
      cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/905/", {
        fixture: 'poke-8-enamorus-incarnate.json'
      })
        .as("getEnamorus")
      cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/?limit=120&offset=905", {
        fixture: 'gen9.json'
      })
        .as('getGen9');
      cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/906/", {
        fixture: 'poke-9-sprigatito.json'
      })
        .as("getSprigatito")
      cy.intercept('GET', "https://pokeapi.co/api/v2/pokemon/1025/", {
        fixture: 'poke-9-pecharunt.json'
      })
        .as("getPecharunt")
  });

  context('Gen 1 Testing', () => {
    it('Should make a team from generation 1', () => {
      cy.visit('http://localhost:3000/kanto');
      cy.wait('@getGen1')
      cy.wait("@getBulbasaur")
      cy.wait('@getMew')

      cy.get('.pokemon-button').first().should('exist')
      cy.get('.pokemon-button').last().should('exist')

      cy.get('.pokemon-button').last().click();
      cy.get('.pokemon-details').should('exist')
      cy.contains('Mew').should('exist');
      cy.contains('Type: Psychic').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Synchronize').should('exist');
      cy.contains('Hp: 100').should('exist');
      cy.contains('Attack: 100').should('exist');
      cy.contains('Defense: 100').should('exist');
      cy.contains('Special-attack: 100').should('exist');
      cy.contains('Special-defense: 100').should('exist');
      cy.contains('Speed: 100').should('exist')

      for (let i = 0; i < 6; i++) {
        cy.get('.gen-button').contains('Add to Team').click();
      }

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => false);

      cy.get('.close-button').click();
      cy.get('.team-member').first().contains('Remove').click();


      cy.get('.pokemon-button').first().click();
      cy.contains('Bulbasaur').should('exist');
      cy.contains('Type: Grass, Poison').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Overgrow').should('exist');
      cy.contains('Chlorophyll (Hidden)').should('exist')
      cy.contains('Hp: 45').should('exist');
      cy.contains('Attack: 49').should('exist');
      cy.contains('Defense: 49').should('exist');
      cy.contains('Special-attack: 65').should('exist');
      cy.contains('Special-defense: 65').should('exist');
      cy.contains('Speed: 45').should('exist')

      cy.get('.gen-button').contains('Add to Team').click();

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => {
        cy.get('.alert').should('exist').contains('Team exported!');
        return true;
      });

      cy.get('a').contains('Teams').click();
      cy.get('.team-member-sprite').first().should('exist').should('have.attr', 'alt', 'bulbasaur');
      cy.get('.team-member-sprite').last().should('exist').should('have.attr', 'alt', 'mew');
    });
  });

  context('Gen 2 Testing', () => {
    it('Should make a team from generation 2', () => {
      cy.visit('http://localhost:3000/johto');
      cy.wait("@getGen2")
      cy.wait("@getChikorita")
      cy.wait("@getCelebi")

      cy.get('.pokemon-button').first().should('exist')
      cy.get('.pokemon-button').last().should('exist')

      cy.get('.pokemon-button').last().click();
      cy.get('.pokemon-details').should('exist')
      cy.contains('Celebi').should('exist');
      cy.contains('Type: Psychic, Grass').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Natural-cure').should('exist');
      cy.contains('Hp: 100').should('exist');
      cy.contains('Attack: 100').should('exist');
      cy.contains('Defense: 100').should('exist');
      cy.contains('Special-attack: 100').should('exist');
      cy.contains('Special-defense: 100').should('exist');
      cy.contains('Speed: 100').should('exist')

      for (let i = 0; i < 6; i++) {
        cy.get('.gen-button').contains('Add to Team').click();
      }

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => false);

      cy.get('.close-button').click();
      cy.get('.team-member').first().contains('Remove').click();


      cy.get('.pokemon-button').first().click();
      cy.contains('Chikorita').should('exist');
      cy.contains('Type: Grass').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Overgrow').should('exist');
      cy.contains('Leaf-guard (Hidden)').should('exist')
      cy.contains('Hp: 45').should('exist');
      cy.contains('Attack: 49').should('exist');
      cy.contains('Defense: 65').should('exist');
      cy.contains('Special-attack: 49').should('exist');
      cy.contains('Special-defense: 65').should('exist');
      cy.contains('Speed: 45').should('exist')

      cy.get('.gen-button').contains('Add to Team').click();

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => {
        cy.get('.alert').should('exist').contains('Team exported!');
        return true;
      });

      cy.get('a').contains('Teams').click();
      cy.get('.team-member-sprite').first().should('exist').should('have.attr', 'alt', 'chikorita');
      cy.get('.team-member-sprite').last().should('exist').should('have.attr', 'alt', 'celebi');
    });
  });

  context('Gen 3 Testing', () => {
    it('Should make a team from generation 3', () => {
      cy.visit('http://localhost:3000/hoenn');
      cy.wait("@getGen3")
      cy.wait("@getTreecko")
      cy.wait("@getDeoxys")

      cy.get('.pokemon-button').first().should('exist')
      cy.get('.pokemon-button').last().should('exist')

      cy.get('.pokemon-button').last().click();
      cy.get('.pokemon-details').should('exist')
      cy.contains('Deoxys-normal').should('exist');
      cy.contains('Type: Psychic').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Pressure').should('exist');
      cy.contains('Hp: 50').should('exist');
      cy.contains('Attack: 150').should('exist');
      cy.contains('Defense: 50').should('exist');
      cy.contains('Special-attack: 150').should('exist');
      cy.contains('Special-defense: 50').should('exist')
      cy.contains('Speed: 150').should('exist')

      for (let i = 0; i < 6; i++) {
        cy.get('.gen-button').contains('Add to Team').click();
      }

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => false);

      cy.get('.close-button').click();
      cy.get('.team-member').first().contains('Remove').click();


      cy.get('.pokemon-button').first().click();
      cy.contains('Treecko').should('exist');
      cy.contains('Type: Grass').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Overgrow').should('exist');
      cy.contains('Unburden (Hidden)').should('exist')
      cy.contains('Hp: 40').should('exist');
      cy.contains('Attack: 45').should('exist');
      cy.contains('Defense: 35').should('exist');
      cy.contains('Special-attack: 65').should('exist');
      cy.contains('Special-defense: 55').should('exist');
      cy.contains('Speed: 70').should('exist')


      cy.get('.gen-button').contains('Add to Team').click();

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => {
        cy.get('.alert').should('exist').contains('Team exported!');
        return true;
      });

      cy.get('a').contains('Teams').click();
      cy.get('.team-member-sprite').first().should('exist').should('have.attr', 'alt', 'treecko');
      cy.get('.team-member-sprite').last().should('exist').should('have.attr', 'alt', 'deoxys-normal');
    });
  });

  context('Gen 4 Testing', () => {
    it('Should make a team from generation 4', () => {
      cy.visit('http://localhost:3000/sinnoh');
      cy.wait("@getGen4")
      cy.wait("@getTurtwig")
      cy.wait("@getArceus")

      cy.get('.pokemon-button').first().should('exist')
      cy.get('.pokemon-button').last().should('exist')

      cy.get('.pokemon-button').last().click();
      cy.get('.pokemon-details').should('exist')
      cy.contains('Arceus').should('exist');
      cy.contains('Type: Normal').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Multitype').should('exist');
      cy.contains('Hp: 120').should('exist');
      cy.contains('Attack: 120').should('exist');
      cy.contains('Defense: 120').should('exist');
      cy.contains('Special-attack: 120').should('exist');
      cy.contains('Special-defense: 120').should('exist');
      cy.contains('Speed: 120').should('exist')


      for (let i = 0; i < 6; i++) {
        cy.get('.gen-button').contains('Add to Team').click();
      }

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => false);

      cy.get('.close-button').click();
      cy.get('.team-member').first().contains('Remove').click();


      cy.get('.pokemon-button').first().click();
      cy.contains('Turtwig').should('exist');
      cy.contains('Type: Grass').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Overgrow').should('exist');
      cy.contains('Shell-armor (Hidden)').should('exist')
      cy.contains('Hp: 55').should('exist');
      cy.contains('Attack: 68').should('exist');
      cy.contains('Defense: 64').should('exist');
      cy.contains('Special-attack: 45').should('exist');
      cy.contains('Special-defense: 55').should('exist');
      cy.contains('Speed: 31').should('exist')

      cy.get('.gen-button').contains('Add to Team').click();

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => {
        cy.get('.alert').should('exist').contains('Team exported!');
        return true;
      });

      cy.get('a').contains('Teams').click();
      cy.get('.team-member-sprite').first().should('exist').should('have.attr', 'alt', 'turtwig');
      cy.get('.team-member-sprite').last().should('exist').should('have.attr', 'alt', 'arceus');
    });
  });

  context('Gen 5 Testing', () => {
    it('Should make a team from generation 5', () => {
      cy.visit('http://localhost:3000/unova');
      cy.wait("@getGen5")
      cy.wait("@getVictini")
      cy.wait("@getGenesect")

      cy.get('.pokemon-button').first().should('exist')
      cy.get('.pokemon-button').last().should('exist')

      cy.get('.pokemon-button').last().click();
      cy.get('.pokemon-details').should('exist')
   cy.contains('Genesect').should('exist');
      cy.contains('Type: Bug, Steel').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Download').should('exist');
      cy.contains('Hp: 71').should('exist');
      cy.contains('Attack: 120').should('exist');
      cy.contains('Defense: 95').should('exist');
      cy.contains('Special-attack: 120').should('exist');
      cy.contains('Special-defense: 95').should('exist');
      cy.contains('Speed: 99').should('exist')

      for (let i = 0; i < 6; i++) {
        cy.get('.gen-button').contains('Add to Team').click();
      }

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => false);

      cy.get('.close-button').click();
      cy.get('.team-member').first().contains('Remove').click();


      cy.get('.pokemon-button').first().click();
            cy.contains('Victini').should('exist');
      cy.contains('Type: Psychic, Fire').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Victory-star').should('exist');
      cy.contains('Hp: 100').should('exist');
      cy.contains('Attack: 100').should('exist');
      cy.contains('Defense: 100').should('exist');
      cy.contains('Special-attack: 100').should('exist');
      cy.contains('Special-defense: 100').should('exist');
      cy.contains('Speed: 100').should('exist')


      cy.get('.gen-button').contains('Add to Team').click();

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => {
        cy.get('.alert').should('exist').contains('Team exported!');
        return true;
      });

      cy.get('a').contains('Teams').click();
      cy.get('.team-member-sprite').first().should('exist').should('have.attr', 'alt', 'victini');
      cy.get('.team-member-sprite').last().should('exist').should('have.attr', 'alt', 'genesect');
    });
  });

  context('Gen 6 Testing', () => {
    it('Should make a team from generation 6', () => {
      cy.visit('http://localhost:3000/kalos');
      cy.wait("@getGen6")
      cy.wait("@getChespin")
      cy.wait("@getVolcanion")

      cy.get('.pokemon-button').first().should('exist')
      cy.get('.pokemon-button').last().should('exist')

      cy.get('.pokemon-button').last().click();
      cy.get('.pokemon-details').should('exist')
      cy.contains('Volcanion').should('exist');
      cy.contains('Type: Fire, Water').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Water-absorb').should('exist');
      cy.contains('Hp: 80').should('exist');
      cy.contains('Attack: 110').should('exist');
      cy.contains('Defense: 120').should('exist');
      cy.contains('Special-attack: 130').should('exist');
      cy.contains('Special-defense: 90').should('exist');
      cy.contains('Speed: 70').should('exist')

      for (let i = 0; i < 6; i++) {
        cy.get('.gen-button').contains('Add to Team').click();
      }

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => false);

      cy.get('.close-button').click();
      cy.get('.team-member').first().contains('Remove').click();


      cy.get('.pokemon-button').first().click();
      cy.contains('Chespin').should('exist');
      cy.contains('Type: Grass').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Overgrow').should('exist');
      cy.contains('Bulletproof (Hidden)').should('exist');
      cy.contains('Hp: 56').should('exist');
      cy.contains('Attack: 61').should('exist');
      cy.contains('Defense: 65').should('exist');
      cy.contains('Special-attack: 48').should('exist');
      cy.contains('Special-defense: 45').should('exist');
      cy.contains('Speed: 38').should('exist')

      cy.get('.gen-button').contains('Add to Team').click();

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => {
        cy.get('.alert').should('exist').contains('Team exported!');
        return true;
      });

      cy.get('a').contains('Teams').click();
      cy.get('.team-member-sprite').first().should('exist').should('have.attr', 'alt', 'chespin');
      cy.get('.team-member-sprite').last().should('exist').should('have.attr', 'alt', 'volcanion');
    });
  });

  context('Gen 7 Testing', () => {
    it('Should make a team from generation 7', () => {
      cy.visit('http://localhost:3000/alola');
      cy.wait("@getGen7")
      cy.wait("@getRowlett")
      cy.wait("@getMelmetal")

      cy.get('.pokemon-button').first().should('exist')
      cy.get('.pokemon-button').last().should('exist')

      cy.get('.pokemon-button').last().click();
      cy.get('.pokemon-details').should('exist')
      cy.contains('Melmetal').should('exist');
      cy.contains('Type: Steel').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Iron-fist').should('exist');
      cy.contains('Hp: 135').should('exist');
      cy.contains('Attack: 143').should('exist');
      cy.contains('Defense: 143').should('exist');
      cy.contains('Special-attack: 80').should('exist');
      cy.contains('Special-defense: 65').should('exist');
      cy.contains('Speed: 34').should('exist')

      for (let i = 0; i < 6; i++) {
        cy.get('.gen-button').contains('Add to Team').click();
      }

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => false);

      cy.get('.close-button').click();
      cy.get('.team-member').first().contains('Remove').click();


      cy.get('.pokemon-button').first().click();
      cy.contains('Rowlet').should('exist');
      cy.contains('Type: Grass, Flying').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Overgrow').should('exist');
      cy.contains('Long-reach (Hidden)').should('exist');
      cy.contains('Hp: 68').should('exist');
      cy.contains('Attack: 55').should('exist');
      cy.contains('Defense: 55').should('exist');
      cy.contains('Special-attack: 50').should('exist');
      cy.contains('Special-defense: 50').should('exist');
      cy.contains('Speed: 42').should('exist')

      cy.get('.gen-button').contains('Add to Team').click();

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => {
        cy.get('.alert').should('exist').contains('Team exported!');
        return true;
      });

      cy.get('a').contains('Teams').click();
      cy.get('.team-member-sprite').first().should('exist').should('have.attr', 'alt', 'rowlet');
      cy.get('.team-member-sprite').last().should('exist').should('have.attr', 'alt', 'melmetal');
    });
  });

  context('Gen 8 Testing', () => {
    it('Should make a team from generation 8', () => {
      cy.visit('http://localhost:3000/galar');
      cy.wait("@getGen8")
      cy.wait("@getGrookey")
      cy.wait("@getEnamorus")

      cy.get('.pokemon-button').first().should('exist')
      cy.get('.pokemon-button').last().should('exist')

      cy.get('.pokemon-button').last().click();
      cy.get('.pokemon-details').should('exist')
      cy.contains('Enamorus-incarnate').should('exist');
      cy.contains('Type: Fairy, Flying').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Cute-charm').should('exist');
      cy.contains('Contrary (Hidden)').should('exist');
      cy.contains('Hp: 74').should('exist');
      cy.contains('Attack: 115').should('exist');
      cy.contains('Defense: 70').should('exist');
      cy.contains('Special-attack: 135').should('exist');
      cy.contains('Special-defense: 80').should('exist');
      cy.contains('Speed: 106').should('exist')


      for (let i = 0; i < 6; i++) {
        cy.get('.gen-button').contains('Add to Team').click();
      }

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => false);

      cy.get('.close-button').click();
      cy.get('.team-member').first().contains('Remove').click();


      cy.get('.pokemon-button').first().click();
      cy.contains('Grookey').should('exist');
      cy.contains('Type: Grass').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Overgrow').should('exist');
      cy.contains('Grassy-surge (Hidden)').should('exist');
      cy.contains('Hp: 50').should('exist');
      cy.contains('Attack: 65').should('exist');
      cy.contains('Defense: 50').should('exist');
      cy.contains('Special-attack: 40').should('exist');
      cy.contains('Special-defense: 40').should('exist');
      cy.contains('Speed: 65').should('exist')

      cy.get('.gen-button').contains('Add to Team').click();

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => {
        cy.get('.alert').should('exist').contains('Team exported!');
        return true;
      });

      cy.get('a').contains('Teams').click();
      cy.get('.team-member-sprite').first().should('exist').should('have.attr', 'alt', 'grookey');
      cy.get('.team-member-sprite').last().should('exist').should('have.attr', 'alt', 'enamorus-incarnate');
    });
  });

  context('Gen 9 Testing', () => {
    it('Should make a team from generation 9', () => {
      cy.visit('http://localhost:3000/paldea');
      cy.wait("@getGen9")
      cy.wait("@getSprigatito")
      cy.wait("@getPecharunt")

      cy.get('.pokemon-button').first().should('exist')
      cy.get('.pokemon-button').last().should('exist')

      cy.get('.pokemon-button').last().click();
      cy.get('.pokemon-details').should('exist')
      cy.contains('Pecharunt').should('exist');
      cy.contains('Type: Poison, Ghost').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Poison-puppeteer').should('exist');
      cy.contains('Hp: 88').should('exist');
      cy.contains('Attack: 88').should('exist');
      cy.contains('Defense: 160').should('exist');
      cy.contains('Special-attack: 88').should('exist');
      cy.contains('Special-defense: 88').should('exist');
      cy.contains('Speed: 88').should('exist')

      for (let i = 0; i < 6; i++) {
        cy.get('.gen-button').contains('Add to Team').click();
      }

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => false);

      cy.get('.close-button').click();
      cy.get('.team-member').first().contains('Remove').click();


      cy.get('.pokemon-button').first().click();
      cy.contains('Sprigatito').should('exist');
      cy.contains('Type: Grass').should('exist');
      cy.contains('Abilities:').should('exist');
      cy.contains('Overgrow').should('exist');
      cy.contains('Protean (Hidden)').should('exist');
      cy.contains('Hp: 40').should('exist');
      cy.contains('Attack: 61').should('exist');
      cy.contains('Defense: 54').should('exist');
      cy.contains('Special-attack: 45').should('exist');
      cy.contains('Special-defense: 45').should('exist');
      cy.contains('Speed: 65').should('exist')

      cy.get('.gen-button').contains('Add to Team').click();

      cy.get('.gen-button').contains('Export Team').click();
      cy.on('window:confirm', (str) => {
        cy.get('.alert').should('exist').contains('Team exported!');
        return true;
      });

      cy.get('a').contains('Teams').click();
      cy.get('.team-member-sprite').first().should('exist').should('have.attr', 'alt', 'sprigatito');
      cy.get('.team-member-sprite').last().should('exist').should('have.attr', 'alt', 'pecharunt');
    });
  });
});