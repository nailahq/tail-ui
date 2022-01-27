import React from 'react';
import { Button, Radio } from '@nailahq/tail-ui/dist';

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <Button
          onClick={() => {
            console.log('test');
          }}
          loading={true}
        >
          Button
        </Button>
      </div>
      <div>
        <Button variant='primaryGhost' onClick={() => {}}>
          Tailwind Setup Starter
        </Button>
      </div>
      <div className='radios'>
        <Radio id='name' name='my-radios' label='Name' />
        <Radio id='last-name' name='my-radios' label='Last Name' />
      </div>
    </div>
  );
};

export default Home;
