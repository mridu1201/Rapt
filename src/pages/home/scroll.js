import './button.css';
import {Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn, ZoomOut} from 'react-scroll-motion';
import './scroll.css';
import HoverRating from './btn';
import CustomizedRating from './overall-btn';


const ZoomInScrollOut=batch(StickyIn(15,50),FadeIn(),ZoomIn());


function Scroll(){
    return(
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(FadeIn(),Sticky(),Fade(),MoveOut(0,-100))}> 
                    <div className='sec-1'>
                        <h1 style={{fontSize:40}} >Welcome to</h1><h1 className='lh'> Rapt!</h1>
                        <br/>
                        <p>An online community for students, providing a platform for learning, sharing experiences and leveraging their knowledge to create a social impact solutions along with spreading awareness in an inclusive way.</p>
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={1}>
                <div className='sec-2-al'>
                <Animator animation={batch(MoveIn(1000,0),)}> 
                    <h1 style={{fontSize:60}}>Events</h1>
                </Animator>
                </div>
                <div className='sec-2'>
                <Animator animation={batch(MoveIn(-1000,0),)}> 
                <button>Upcoming Events</button>
                <br/>
                <button>Ongoing Events</button>
                </Animator>
                </div>
                    <Animator animation={batch(MoveIn(1000,0),Sticky(),Fade(),MoveOut(0,-10))}>
                    <div className='container'>
        <div className='card'>
          <img src='https://www.eventbrite.com/blog/wp-content/uploads/2022/04/GP-socialdistancing-04_Blog-Header-2.png' />
          <div className='intro'>
            <h2>Upcoming Events</h2>
            <p>A state level calssical dancing competition was held on November 2nd.Top 3 members are selected for the National level competition </p>
          </div>
        </div>
        <div className='card'>
          <img src='https://thumbs.dreamstime.com/b/word-writing-text-upcoming-events-business-concept-approaching-planned-public-social-occasions-young-woman-speaking-163969171.jpg' />
          <div className='intro'>
            <h2>Ongoing Events</h2>
            <p>A state level calssical dancing competition was held on November 2nd.Top 3 members are selected for the National level competition </p>
          </div>
        </div>
        </div>
        </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
        <Animator animation={ZoomInScrollOut}> 
            <h1 style={{fontSize:60}}>Gallery</h1>
        </Animator>
        <Animator animation={batch(Sticky(),Fade(),Move())}> 
            <div className='body'>
            <div className='card1'>
                <img src='https://www.bricartsmedia.org/sites/default/files/190425EFrossard_BRIC_PortraitPolitical_3700Md.jpg' className='card-img' />
                <div className='card-body'>
                    <h2 className='card-title'>Gallery</h2>
                    <p className='card-subtitle'>all your posts</p>
                    <p className='card-info'>The place where you can view what's going on around you, get to know the acheivements and stories</p>
                    <button className='card-btn'>view posts</button>
                </div>
            </div>
            </div>
        </Animator>
        <Animator animation={batch(Sticky(80,60),Fade(),Move())}> 
            <div className='body'>
            <div className='card1'>
                <img src='https://visme.co/blog/wp-content/uploads/2020/03/Header-1200.png' className='card-img' />
                <div className='card-body'>
                    <h2 className='card-title'>Create Posts</h2>
                    <p className='card-subtitle'>create your post</p>
                    <p className='card-info'>Share your stories,acheivements and talents here and inspire others.</p>
                    <button className='card-btn'>create a post</button>
                </div>
            </div>
            </div>
        </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
            <div className='sec-3'>
            <Animator animation={batch(FadeIn(),Sticky(30,50),ZoomOut())}>
                <div className='sec-3-1'>
                    <h1>About Us</h1>
                    <br/>
                    <br/>
                    <p>Your curious?</p>
                    <br/>
                    <p> Learn more about us and how the Student Community functions!</p>
                </div>
            </Animator>
            <Animator animation={batch(FadeIn(),Sticky(70,50),ZoomOut(1))}>
                <div className='sec-3-2'>
                    <button>About Us</button>
                    <button>Contact Us</button>
                </div>
            </Animator>
            </div>
        </ScrollPage>

        <ScrollPage page={4}>
                <Animator animation={batch(FadeIn(),Sticky(20,20))}>
                    <h1>Rate our WebApp</h1>
                </Animator>
                <Animator animation={batch(MoveIn(-1000,0),Sticky(25,55))}>
                    <h4>Design</h4>
                    <HoverRating/>
                    <h4>Linking</h4>
                    <HoverRating/>
                    <h4>Features</h4>
                    <HoverRating/>
                    <h4>Overall Rating</h4>
                    <CustomizedRating/>

                </Animator>
            </ScrollPage>

        </ScrollContainer>
    )}


export default Scroll;


































































/*import {Animator, batch, Fade, FadeIn, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn} from 'react-scroll-motion';
import './scroll.css';


const ZoomInScrollOut=batch(StickyIn(),FadeIn(),ZoomIn());

const FadeUp=batch(Sticky(),Fade(),Move());

function Scroll(){
    return(
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Sticky(),Fade(),MoveOut(0, -200))}> 
                    <h2>It's me!!!</h2>
                </Animator>
            </ScrollPage>

            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}> 
                    <h2>Hi!!!</h2>
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
                <Animator animation={FadeUp}> 
                    <h2>I'm the problem it's me...</h2>
                </Animator>
            </ScrollPage>

            <ScrollPage page={3}>
                <div className='sec-3'>
                <Animator animation={MoveIn(-1000,0)}>I'll</Animator>
                <Animator animation={MoveIn(1000,0)}>stare</Animator>
                <Animator animation={MoveOut(1000,0)}>directly at the</Animator>
                <Animator animation={MoveOut(-1000,0)}>sun but never in the mirror</Animator>
                </div>
            </ScrollPage>

            <ScrollPage page={3}>
                <Animator animation={batch(FadeIn(),Sticky())}>
                    <h2>Done</h2>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}

export default Scroll;*/