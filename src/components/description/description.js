import React from 'react';

import '../description/description.css';

const Description = () => {
  return (
    <div className='allDescriptionArea'>  
        <div className='twoDescription'>    
            <div body className='oneDescriptionOfTwo'>
                <h2 >
                    Music Ipsum
                </h2>
                    <div style={{textAlign: 'justify', marginRight: '3%'}}>
                    Mauris nec ante erat. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed non tellus et tellus sagittis laoreet rutrum sollicitudin leo. 
                    Aenean scelerisque risus vel purus pulvinar, posuere tempor augue egestas. Nam vel quam sit amet magna hendrerit congue. 
                    Integer cursus augue nunc, ac accumsan mauris facilisis id. In eu lectus eu orci viverra molestie. 
                    Vivamus faucibus velit justo, nec feugiat massa molestie et. Nulla eleifend metus ut pretium aliquet. 
                    Curabitur.
                    </div>
                    
                </div>
                <div  className='oneDescriptionOfTwo'>
                    <h2 >
                    Trust us
                    </h2>
                    <div style={{textAlign: 'justify'}}>
                    Sed id tempus justo, id vehicula dui. Suspendisse pulvinar euismod lacus, quis tempus tellus. 
                    Praesent sed faucibus libero, eget vestibulum justo. Pellentesque efficitur lorem vitae molestie fermentum. 
                    Nunc nec justo pellentesque, gravida nisi quis, malesuada lectus. 
                    Aenean porttitor condimentum dui, vitae bibendum lacus finibus at. Donec vel sem elit. Cras volutpat ut ex sed facilisis.
                    Nunc vel sagittis lorem, semper malesuada nibh. Ut egestas ante sit amet dui vehicula, vitae cursus erat feugiat. 
                    Nam eget pulvinar ipsum. 
                    </div>
                </div>
        </div>

        <div className='oneVerticalDescription'>      
            <div >
                <h2 >
                Best music shopping experience
                </h2> 
                <div style={{textAlign: 'justify'}}>
                Phasellus tempus, purus sit amet eleifend condimentum, nunc est tempus dui, quis accumsan nibh turpis sit amet velit. 
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean quis scelerisque enim. 
                In venenatis enim eget elementum bibendum. Sed mattis dapibus elit, auctor eleifend est viverra sit amet.
                Maecenas eget leo porttitor, feugiat eros vel, lacinia nibh. 
                Ut vehicula, velit quis interdum placerat, dolor erat pulvinar tortor, sit amet posuere odio sem vitae erat. 
                Vivamus efficitur lectus id feugiat gravida. Morbi porttitor, sem eu ultricies congue, lacus ex rutrum nibh, non condimentum sem tortor eu diam. 
                Praesent diam ipsum, feugiat sed consectetur eget, accumsan non ante. 
                Vestibulum dapibus, diam quis posuere finibus, nisl odio vestibulum leo, in eleifend orci orci a lacus. 
                Praesent libero tortor, venenatis in ligula nec, ornare pulvinar urna. Ut sodales ex nec elit eleifend molestie.
                Morbi feugiat, odio sed lobortis mollis, enim tellus egestas ex, iaculis lobortis lacus ante a sem. Phasellus ut luctus lectus.

                Nam ut lacinia mauris. Cras eget turpis in massa semper malesuada vitae vitae magna. 
                Ut vel volutpat orci. Nam ut hendrerit purus. Donec eget mi massa. Vivamus non erat et mi molestie pulvinar. 
                Proin lectus dui, efficitur at euismod vitae, tristique a nulla. Quisque efficitur interdum pretium. 
                Cras auctor tincidunt diam. 
                </div>
            </div>
      </div>
    </div>
    
  );
};

export default Description;