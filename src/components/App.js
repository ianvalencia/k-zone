import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';
import ResponsiveNavbar from './ResponsiveNavbar'
import { Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPage';
import BrowseGroup from './BrowseGroups';
import Group from './Group'
import ArtistsContainer from './ArtistsContainer';
import AlbumsContainer from './AlbumsContainer';
class App extends Component {
  state = {
    groups: [
    //   {
    //     id: 'NCT 127',
    //     groupType: 'Boy Group', // Boy Group, Girl Group, Co-ed 
    //     debutDate: 'July 27, 2016',
    //     company: 'SM Entertainment',
    //     fandomName: 'NCTZen',
    //     fandomColor: 'Something Green',
    //     status: 'Active', // Active, Disbanded
    //     members: [], // ID ng members dito
    //     imgURL: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/63/cc/b4/63ccb404-eb7a-a3f0-4dc9-152540bc161f/NCT_127_Cover.jpg/268x0w.jpg', // links lang ilalagay
    //     description: 'NCT 127 (엔씨티 127) is the 2nd sub-unit of the boy group NCT. The sub-unit currently consists of 10 members: Taeil, Johnny, Taeyong, Doyoung, Yuta, Jaehyun, Win Win, Jungwoo, Mark, Haechan. NCT 127 debuted on July 7th, 2016 under SM Entertainment.'
    //   },
    //   {
    //     id: 'Stray Kids',
    //     groupType: 'Boy Group', // Boy Group, Girl Group, Co-ed 
    //     debutDate: '',
    //     company: '',
    //     fandomName: '',
    //     fandomColor: '',
    //     status: '', // Active, Disbanded
    //     members: [], // ID ng members dito
    //     imgURL: 'https://lastfm-img2.akamaized.net/i/u/770x0/dd9393d96f6b5b33cdd6e90f35b680fd.jpg', // links lang ilalagay
    //     description: 'Stray Kids (스트레이 키즈) is a 9-member South Korean boy group under JYP Entertainment. The group consists of Bang Chan, Woojin, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, and I.N. Stray Kids was created through the survival program with the same name, Stray Kids. Stray Kids debuted on March 25, 2018.'
    //   },
    //   {
    //     id: 'LOONA',
    //     groupType: 'Girl Group', // Boy Group, Girl Group, Co-ed 
    //     debutDate: '',
    //     company: '',
    //     fandomName: '',
    //     fandomColor: '',
    //     status: '', // Active, Disbanded
    //     members: [], // ID ng members dito
    //     imgURL: 'https://lastfm-img2.akamaized.net/i/u/ar0/7e9fbb03749066e1d58b6e9261fdbbbc.jpg', // links lang ilalagay
    //     description: 'LOONA (LOOΠΔ – 이달의 소녀) contains of 12 members: Haseul, Vivi, Yves, JinSoul, Kim Lip, Chuu, Heejin, Hyunjin, Go Won, Choerry, Olivia Hye and Yeojin. The band is under Blockberry Creative. They debuted on August 20, 2018 with their title track “Hi High”.'
    //   },
    //   {
    //     id: 'Seventeen',
    //     groupType: 'Boy Group', // Boy Group, Girl Group, Co-ed 
    //     debutDate: '',
    //     company: '',
    //     fandomName: '',
    //     fandomColor: '',
    //     status: '', // Active, Disbanded
    //     members: [], // ID ng members dito
    //     imgURL: 'https://i.scdn.co/image/7b90f0bfdce832e113edba285d7aad9c283eb3d7', // links lang ilalagay
    //     description: 'WAAAAAAAAAAAAAA'
    //   },
    //   {
    //     id: 'SNSD',
    //     groupType: 'Girl Group', // Boy Group, Girl Group, Co-ed 
    //     debutDate: '',
    //     company: '',
    //     fandomName: '',
    //     fandomColor: '',
    //     status: '', // Active, Disbanded
    //     members: [], // ID ng members dito
    //     imgURL: 'https://lastfm-img2.akamaized.net/i/u/ar0/6cb5367bf92f061d3bfac9277161e3c2.jpg', // links lang ilalagay
    //     description: 'OG Nation\'s girl group'
    //   }
    // ],
    // groupTypeOptions: [
    //   { key: 1, text: 'Boy Group', value:'Boy Group' },
    //   { key: 2, text: 'Girl Group', value:'Girl Group' },
    //   { key: 3, text: 'Coed', value: 'Coed' }
    ]
  }
  
  componentDidMount() {
    let url = 'http://localhost:3001/groups'
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({groups: data}))
  }

  createGroup = (grp) => {
    this.setState({
      timers: this.state.groups.concat(grp),
    });
  } 

  updateGroup = (attrs) => {
    this.setState({
      groups: this.state.groups.map((group) => {
        if (group.id === attrs.id) {
          return Object.assign({}, attrs);
        } else {
          return group;
        }
      }),
    });

    let url = 'http://localhost:3001/groups/'+attrs.id
    fetch(url, {
      method: 'put',
      body: JSON.stringify(attrs),
      headers: {
        'Content-Type': 'application/json',
      },
    })

  }

  
  render() {
    return (
      <div>
        <ResponsiveNavbar />
        <Container style={{ marginTop: '2em'}}>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/browse/groups' render={() => <BrowseGroup data={this.state}/>} />
          <Route path='/artists' component={ArtistsContainer}/>
          <Route path='/albums' component={AlbumsContainer}/>
          <Route
            path='/groups/:id'
            render={({ match }) => {
              const grp = this.state.groups.find(
                (g) => g.id == match.params.id
              )
              return (
                <Group 
                  data={grp} 
                  onFormSubmit={this.updateGroup} 
                />
              );
            }}
          />
        </Container>
      </div>
    );
  }
}

export default App;