import { Section, SectionType } from './data-interfaces';
import {
  ABOUT_MENU, PERPETRATORS_MENU, MOVEMENT_MENU, PRINCIPLES_MENU,
  GAME_CHANGERS_MENU, SUPPORT_MENU, COMMUNITY_MENU
} from './menus';
import { GAME_CHANGERS_SECTION } from './game-changers';
import { SUPPORT_SECTION } from './support';
import { COMMUNITY_SECTION } from './community';
import { ACCOUNTABILITY_SECTION } from './accountability';

export const DATA_MODEL: Section[] = [
  createDataModel('About'),
  createDataModel('Game Changers'),
  createDataModel('Movement'),
  createDataModel('Principles'),
  createDataModel('Support'),
  createDataModel('Accountability'),
  createDataModel('Community')
];

function createDataModel(name: SectionType): Section {
  let dataModel = new Section();
  dataModel.navTitle = name;

  switch(name) {
    case 'About':
      dataModel.menu = ABOUT_MENU;
      break;
    case 'Game Changers':
      dataModel.menu = GAME_CHANGERS_MENU;
      dataModel.questions = GAME_CHANGERS_SECTION;
      break;
    case 'Movement':
      dataModel.menu = MOVEMENT_MENU;
      dataModel.questions =  [];
      break;
    case 'Support':
      dataModel.menu = SUPPORT_MENU;
      dataModel.questions = SUPPORT_SECTION;
      break;
    case 'Accountability':
      dataModel.menu = PERPETRATORS_MENU;
      dataModel.questions = ACCOUNTABILITY_SECTION;
      break;
    case 'Community':
      dataModel.menu = COMMUNITY_MENU;
      dataModel.questions = COMMUNITY_SECTION;
      break;
    case 'Principles':
      dataModel.menu = PRINCIPLES_MENU;
      dataModel.questions =  [];
      break;
    default:
      dataModel.menu = [];

  }
  return dataModel;
}

function isNotBoxSection(name: string) {
  return name === 'About' || name === 'Principles' || name === 'Movement';
}


export const FUTURE_SECTION = [
  // {
  //   title: 'Futures',
  //   question: '"We are Just at the Beginning"',
  //   quotes: [
  //     {
  //       tagline: 'INCITE!\'s game plan',
  //       quote: '[in 2014] I think <strong>everyone\'s at the beginning</strong>. INCITE! in particular put out some amazing thought pieces on [community accountability] and really sparked these conversations in all these different places. <strong>Everyone\'s trying to come up with it on their own</strong>. I know that\'s how we felt a few years back in Chicago. We were like, <strong>we\'re going to ground this in what INCITE! has written</strong>. We\'re going to connect with INCITE! when we can.',
  //       personId: 6
  //     }
  //   ]
  // },
  // {
  //   title: 'Futures',
  //   question: '"Scope & Sustainability"',
  //   quotes: [
  //     {
  //       tagline: 'Take 10 blocks & replace PIC',
  //       quote: 'By the time I left Women and Girls CAN, I felt like we had come up with a lot of <strong>theories that were right on, and the implementation of them is so challenging</strong>. I feel like there are very few examples right now [in 2013] of where they\'ve been implemented in a <strong>sustainable way</strong>. It\'s easy to come up with examples – like our healing circle. Or another example, here was an act of violence and the community came together, because the right people were at the table and somebody was trained in restorative justice, and they came up with a process and it was good.'
  //       + '<br><br>' + 'But that\'s really different than saying: <strong>Let\'s take a community in Chicago</strong>, a whole neighborhood in Chicago. And let\'s <strong>remove the PIC</strong> [prison industrial complex] and <strong>remove the traditional ways of going to social service agencies and traditional shelters</strong> which are so problematic most of the time. Let\'s take all that out and what infrastructure do we put in its place that can really respond to violence. I haven\'t seen that yet. I think Mimi Kim in California did some interesting work, we were looking at that very closely. Not even going neighborhood-wide, just a ten block radius, <strong>how do you set something up that really kept people safe and responded to acts of violence and prevented acts of violence and didn\'t rely on any of the traditional structures?</strong>',
  //       personId: 6
  //     }
  //   ]
  // },
  {
    title: 'We are just at the beginning',
    question: '',
    quotes: [
      {
        tagline: 'INCITE!\'s game plan',
        quote: '[in 2014] I think <strong>everyone\'s at the beginning</strong>. INCITE! in particular put out some amazing thought pieces on [community accountability] and really sparked these conversations in all these different places. <strong>Everyone\'s trying to come up with it on their own</strong>. I know that\'s how we felt a few years back in Chicago. We were like, <strong>we\'re going to ground this in what INCITE! has written</strong>. We\'re going to connect with INCITE! when we can.',
        personId: 6
      },
      {
        tagline: 'Alternative already underway',
        quote: 'One thing that has helped me was being on a panel with Alisa Bierria, where somebody was like, "This is all great, but you know I have to go back to my dorm at the end of this. You\’re not telling me anything that\’s going to be really helpful to me right now." And she was like, "I think you might have misunderstood. You can do this work with your friend on the way back to the dorm." And I think I hold onto that a lot, when we are talking about community accountability, that <strong>this can happen and be practiced at so many different levels</strong>. […] <strong>People have more skills than they knew</strong> they did. Because it turns out people are pretty good at creating distractions or asking somebody if they are okay, you know? […] <strong>This is already community accountability happening. This is already the alternative underway. This is already a new form of life being developed in the midst of this form of life, but how do you articulate that?</strong>',
        personId: 3
      },
      {
        tagline: 'Where you can start...',
        quote: 'Therefore the question is <strong>what can you help build?</strong> What conversations can you start to increase the safety of your community? What <strong>new structures or collaborations</strong> will you create to decrease your reliance on the criminal legal system? Perhaps you want to think about one form of violence to work on and build your knowledge from there. You could start simply by <strong>having a dinner with your friends, family and chosen family</strong> to discuss how you all can better support each other. Or you could raise the issue of police violence and harassment at your next <strong>tenants association meeting</strong> and see if there\'s a way that your neighbors want to engage with each other as opposed to the police. Next, you could research ways that people can get emergency medical assistance outside of 911. The possibilities are endless.'
        + '<br><br>' + '-from "<a href="http://www.truth-out.org/opinion/item/32489-building-community-safety-practical-steps-toward-liberatory-transformation target="_blank"">Building Community Safety: Steps Towards Liberatory Transformation</a>" in Truthout, Aug. 15, 2015',
        personId: 7
      },
    ]
  },
  {
    title: 'Limits',
    question: '',
    quotes: [
      {
        tagline: 'Ideal vs. reality',
        quote: 'That\'s one of those big questions that community accountability hasn\'t figured out. We have this <strong>ideal</strong> and it exists in a set-up where there already is <strong>power and privilege</strong>, so what do we do? Where do we go? How do we do this in a mindful way that isn\'t recreating some of those dynamics?'
        + '<br><br>' + 'I think I have a lot of questions that are just core to when we\'re doing the work that seem to come up again and again, depending on the situation, that feel like <strong>big unresolved questions that community accountability never got to</strong>. Or you know, where it might actually not be appropriate. Maybe not appropriate is the wrong word, but just like where it <strong>wouldn\'t be the best fit</strong> or isn\'t. We need a <strong>different model</strong>.',
        personId: 4
      },
      {
        tagline: 'Assault vs. abuse',
        quote: 'I wanna be clear that <strong>what we do is not counseling</strong>, and everyone that we work with are all meeting with counselors. That\’s something that we think is valuable and does dovetail with what we do, but <strong>we\’re there to challenge people and get them thinking on the political side of it, but we\’re not there to solve any of the behavioral problems</strong> that they might have. That is something better suited to a therapist. We can only do so much on that end, you know.'
        + '<br><br>' + 'Thinking about it as <strong>political education versus more serious behavioral offenses is like making the distinction between assault and abuse</strong>. Because we tend to, in a lot of documents, tend to interchange them or lump them together, because so often sexual assault happens in an abusive relationship. But they are often different. There can be someone who sexually assaults somebody once or a couple of time because they just don\’t understand somebody else\’s boundaries and why that\’s important. And I think a lot of education can go really far to help that.'
        + '<br><br>' + 'But then you\’ve got somebody who may only sexually assault somebody once but they\’re emotionally abusive and that\’s long-term. We can try to address those behaviors but it can be kind of difficult to have politics change those behaviors, to just kind say "oh read these zines."'
        + '<br><br>' + 'For instance, we can talk to someone about their harm and examine issues of consent and how being intoxicated affects your ability to judge other people\'s boundaries, but it\’s <strong>beyond our scope to significantly deal with somebody\’s issues with substance abuse</strong>.'
        + '<br><br>' + 'So that\’s something that I\’ve been thinking about more in terms of dealing with people, <strong>just drawing that line</strong>. This helps us deal with the scope of what we can do. […] Some people have a pattern of evading accountability in their lives, through these really deep learned behaviors. That really, really needs the support of a lot more community members to try to change, because you\’re dealing with a wide range of interactions.',
        personId: 18
      },
      {
        tagline: 'Community-based, but not transformative',
        quote: '[Describing the local businesses and institutions she organized as part of the "Safe Outside the System" training]'
        + '<br><br>' + 'A lot of times these spaces were people who were not anti-LGBT folks, but just not really understanding [LGBT issues]. So the training included some basics on heterosexism, homophobia, transphobia, some info on the violence that had been happening in the neighborhood, some info that they were already deeply acquainted with about how police violence is flowing in the neighborhood.'
        + '<br><br>' + 'Then we would just do this facilitated discussion. So, if a fight broke out in your space, <strong>what would you do?</strong> If this happened, what would you do? <strong>Many of them would assume they had no safety strategies, but they did but were not explicit to them.</strong> They were not written down, they were just in their head as \‘this is what we did.\’ So we wanted to do that to make it more explicit to them. <strong>We wanted to make sure those strategies included queer and trans folks of color.</strong>[…]'
        + '<br><br>' + 'They already were in many ways [practicing community-based strategies]. It was <strong>community-based strategies but it wasn\'t necessarily transformative</strong>. There was this one space that was like, "Well if things get really bad I call the guy who owns the corner store across the street cuz he owns a machete" (laughs).That\’s a response but its not transformative. It is totally about threatening.'
        + '<br><br>' + '<strong>That\’s one of those questions as a movement we have to [ask ourselves]</strong>. I don\'t think we\'ve fully grappled with the fact that a lot of us deep down, whether or not we say it or not, <strong>we think that sometimes de-escalating is about a power play</strong>. Sometimes it is about, \'Don\'t fuck with me, because you think I will fuck with you.\' <strong>We know that\'s not transformative, but I\'m not sure we\'ve figured out the transformative thing we all feel in our hearts would work</strong>. That is the gap that I would see among theory and practice. Right now what I think we do is that we operate in the space where we all know the right words to say. So no one will mention, "Well, yeah, one of my safety strategies is to let people know they should be scared if they try to fuck with me." So no one will say that, we\'ll all be like, "Yeah, we\'re just going to build relationships and transform society." But it\'s the way that I keep myself safe...',
        personId: 7
      },
      {
        tagline: 'Do survivors want this?',
        quote: '<strong>I\'ve worked on a lot of murder</strong> between my time at AudreLorde Project and my time at the Anti-Violence Project. That\'s, I guess, like 30 murders at this point, 30, 35, I don\'t know. That makes me a bit of a weirdo. None of the parents or chosen family that I worked with wanted a process outside of the system. <strong>Everybody wanted to prosecute, every single person</strong>. And I get it because they\’ve just lost someone they loved in a really terrible way. But it still <strong>made me sad and scared for the movement. So what is the thing that would be helpful and useful</strong> for them, <strong>how long will it take us to build it?</strong>'
        + '<br><br>' + 'There were definitely things that we did. We had a fund where we would give money to people after murder or other forms of violence had happened. In New York, you can get crime victim services money but one you have to, one, report the crime and you have to do all this re-traumatizing processes to navigate the bureaucracy. So we would just give them money. Sometimes people didn\'t want to join or get involved with ALP, but would be like "Oh, I\'ll totally give $10 that you will pass on to a parent who loses a child." And then they\'d be like, "Okay, fine, you can have my email address" (laughs).'
        + '<br><br>' + 'So what I think of as a dirty secret of the transformative justice or the community accountability movement... My constant question is: <strong>do the people who are most affected by these things really want the thing we are building? And can they access it?</strong> I think that the answer is yes, but we have to find a different way... Yes, but there\'s a gap. Yes, and I don\'t know what the gap is. Yes, because most of the people I know who have lost their kids also have experiences with criminalization and imprisonment, they have all these other really fucked-up systemic experiences.  But <strong>[the system] is also the only thing they have</strong>. They\'re like, "Unleash this motherfucker on this person who hurt me or hurt my family." So it\'s a challenge.'
        + '<br><br>' + 'I think the more that we can say [this secret] and be open with it, the less that we are actually dogmatically bringing or holding onto our politics. Like these phrases we are supposed to say, it starts to feel a little religious. So yeah, I don\'t know, does everyone transform? Or, I don\'t know, does everyone want [community accountability]? I really don\'t know.'
        + '<br><br>' + '<strong>I want to work on something and keep working on it and one day I want it to be so useful and so impactful and so effective, that even in peoples\' deepest moments of trauma, they could find solace in this</strong>. Let it push us to up our rigor and push us to up our thoughtfulness.  We have to think about the idea of generationFIVE [to end child sexual abuse in the next five generations]. Maybe we are working on stuff that\'s going to be helpful far in advance. How can we not support the kind of in-fighting where we are really \‘anti-\’towards people who are working on something [that is not transformative but] that might give support to people right now in a different way?',
        personId: 7
      },
      {
        tagline: 'Community limitations',
        quote: '<strong>I want to believe that our communities can do everything</strong>, that our communities can be everything that we want and need them to be... They are sort of this dream that we could exist outside of the world as it exists right now and outside of particularly the way that states are using violence. And then it comes up against very real <strong>capacity issues, limits</strong> around what our skill bases actually are, what we\'re actually able to do, and follow through on.'
        + '<br><br>' + 'For me, accountability is a lot of doing what you say you\'re gonna do, and sometimes I feel like in the transformative justice models, <strong>we\'re not actually able to do all the things that we want to do</strong>, or say we want to do.'
        + '<br><br>' + 'Is it better to be like, "Well, we\'ve got nothing" or is it better to be like, "We could try this thing and it probably is gonna be weird and I hope that it goes well and here are all the values its based on, which sounds really cool and in line with our values, but we don\'t really know how to do it yet."',
        personId: 4
      }
    ]
  },
  {
    title: 'Learning & documenting',
    question: '',
    quotes: [
      {
        tagline: 'When & how to document?',
        quote: 'We need to be documenting this work. That\'s where the work is at right now. Due to confidentiality and also due to burn out and all these other things, <strong>there are all these stories and there not centered anywhere</strong>. I\'m like, I don\'t know when to write it up. It\'s been five years, do I write about it now? It\'s been a month, do I write about it now?',
        personId: 4
      },
      {
        tagline: 'Get the knowledge where you can',
        quote: 'I hope we\'re going towards <strong>skill-building</strong>. The other thing is that <strong>we can learn our skills from folks who aren\'t necessarily progressive.</strong>'
        + '<br><br>' + 'When I was at AVP [Anti-Violence Project], I got to meet with an officer in the the Hate Crimes Unit at the NYPD. I came in with all my assumptions but ended up learning a lot from that conversation. Sometimes it\'s just good to share space with people who\'ve dealt with a lot of incidents of violence. The more incidents I worked on, the more that I needed to engage with people who also had a long history with working on violence, despite political differences. Once of my concerns is that some folks doing community accountability work, haven\’t done a lot of work on violence and trauma. <strong>There are just instincts that people build by having held a lot of trauma and space for survivors</strong>. These skills are about practice, skills that we can\’t learn in books and workshops.'
        + '<br><br>' + 'So I think, <strong>get the knowledge wherever you can, even if you politically disagree</strong>, even if they\'re going to give you a political lecture about why you\'re doing something dangerous, or fucked up, or blah blah. You know where you\'re at, <strong>skim it off the top</strong>, get the knowledge.',
        personId: 7
      },
      {
        tagline: 'Building Connections',
        quote: 'We can have <strong>discussions</strong> with people who have just worked with people who did harm. <strong>From systematic approaches to reformist approaches to radical approaches</strong>. Could you imagine what it would mean to get people who had worked with people doing harm together in a room, just for one day? Around "This is what I see" or "This is what I\'m learning" or "This is what I see from my practice."'
        + '<br><br>' + 'That\’s what we have to do, we have to go into <strong>the sharing and the learning, the co-strategizing</strong>. "Okay so you work on these government-mandated programs for folks who\'ve harmed around domestic violence. Tell me everything you think is really fucked up. Tell me everything you wish you could change but you can\'t. Tell me what kind of thing you would want to be in existence but is not of the state." Sometimes we can learn from people who don\’t have the same politics as us. Some of the people who share our politics are working within the system.',
        personId: 7
      },
      {
        tagline: 'Long-term, specific practice',
        quote: 'I would love for folks to think about a <strong>specific</strong> context <strong>and practice</strong>. Like "We\'ve been working with folks who have harmed around domestic violence, but it\'s emotional abuse. So we\'re going to take time to practice in this way in this context with this community for the next five years, ten years." So that we have more people <strong>building knowledge</strong>, you know?',
        personId: 7
      },
      {
        tagline: 'We don\’t have to prove ourselves',
        quote: '<strong>We are not at the place where we used to be where we had to constantly prove that community accountability & transformative justice were worthwhile ideas</strong>. We don\'t have to put as much of our energy there. We don\'t. There are books, and we can ask people to read them.'
        + '<br><br>' + 'So now, out of the proving place, we actually have to focus on <strong>refining, building and growing responses that are useful</strong>. Not just useful from the \'proving that its viable\' place, but useful that <strong>survivors and communities say this was helpful</strong>. Because we have the bandwidth, we have to stop operating from the place where we have to prove and pretend that everything is successful or do everything from a theoretical place.'
        + '<br><br>' + 'The next thing is about how we work: not coming from a place of trying to compete with each other, and instead being <strong>open to hearing what other people have learned, and to being publicly open and humble about how much we have to learn</strong>. I think we also need to have more room to be open to survivors and the approaches that they need. I guess I just want <strong>more gray, more flexibility</strong>. Because I think the time for us to be rigid is in the past, and we can learn a lot from each other.'
        + '<br><br>' + 'I also think about experience... Honestly, <strong>my politics have become more open as my experience has deepened</strong>. I\'m open to different approaches or messing with things. It\'s definitely experience and seeing that <strong>my rigid politics didn\'t necessarily save me or save other people</strong>.',
        personId: 7
      },
      {
        tagline: 'Transfer lessons',
        quote: 'One of the things that I push for, since I work specifically with queer folks at my work – I\'m the Queer Network Program Coordinator at API Chaya, so its specifically looking, working with queer communities. So my frame has always been: <strong>queers are doing things differently, and mainstream,non-queer anti-violence folks could have a lot to learn from us</strong>.'
        + '<br><br>' + 'Where it\'s not that folks just get their \‘cultural competency gold star\’ for working with queer communities and we\'re included to a table that is already happening, but that there are <strong>a lot of lessons that can come out of the queer communities</strong> that we\'re working with that would <strong>transfer over to rural communities, or really small communities</strong> where folks all know each other, which are similar to API [Asian Pacific Islander] and immigrant communities. And vice versa – we city-centered queers have lots to learn from those communities too!'
        + '<br><br>' + 'So I think, okay, maybe it doesn\'t make sense to just have a universal stamp where it\'s like "Well it got figured out in queer communities of color, so it\'s gonna just go everywhere."  I think it\'ll <strong>morph and change and be fluid</strong> with whatever that context or situation is.',
        personId: 4
      },
      {
        tagline: 'Need resources on accountability',
        quote: 'One of the other gaps: I was working with <strong>someone who was working really really hard to figure out what it means to be accountable directly to the survivor(s)</strong>. They weren\'t in the lives of the people that they had hurt. They had hurt multiple people and one of them gave them a list of "You need to be accountable, here\'s your stuff, and I never want to see you again." It hit them pretty heavy and they were looking to identify with other people who caused harm. <strong>To talk about what does accountability look like, to find resources and readings</strong>. But almost all of them are organizer to organizer, how do we hold people accountable, survivor stories, which I think are really important and hold a different place, but none of them were like, "Hey, I\'ve had a really hard time trying to be accountable, this is what I\'ve tried to do, this is where I felt defensive and angry."'
        + '<br><br>' + 'I think even ourselves have a – I shouldn\'t say \'even ourselves\' cuz that makes it sound like I\'m perfect or haven\'t ever hurt someone. But I think its easy to distance ourselves, like we\'ve never fucked up, our shit doesn\'t stink, you know, and it\'s just weird that there\'s a big gap. Because we know that there are lots of people who\'ve successfully been accountable to something, right? That could be being accountable to keeping the kitchen clean for my roommates. [Work with perpetrators] is what folks want to focus on so hard, and then there are actually <strong>gaps in hearing from people who\'ve actually been through accountability processes on how that was for them</strong>.',
        personId: 4
      }
    ]
  },
  {
    title: 'Scope & sustainability',
    question: '',
    quotes: [
      {
        tagline: 'Take 10 blocks & replace PIC',
        quote: 'By the time I left Women and Girls CAN, I felt like we had come up with a lot of <strong>theories that were right on, and the implementation of them is so challenging</strong>. I feel like there are very few examples right now [in 2013] of where they\'ve been implemented in a <strong>sustainable way</strong>. It\'s easy to come up with examples – like our healing circle. Or another example, here was an act of violence and the community came together, because the right people were at the table and somebody was trained in restorative justice, and they came up with a process and it was good.'
        + '<br><br>' + 'But that\'s really different than saying: <strong>Let\'s take a community in Chicago</strong>, a whole neighborhood in Chicago. And let\'s <strong>remove the PIC</strong> [prison industrial complex] and <strong>remove the traditional ways of going to social service agencies and traditional shelters</strong> which are so problematic most of the time. Let\'s take all that out and what infrastructure do we put in its place that can really respond to violence. I haven\'t seen that yet. I think Mimi Kim in California did some interesting work, we were looking at that very closely. Not even going neighborhood-wide, just a ten block radius, <strong>how do you set something up that really kept people safe and responded to acts of violence and prevented acts of violence and didn\'t rely on any of the traditional structures?</strong>',
        personId: 6
      },
      {
        tagline: 'Pockets of promise everywhere',
        quote: 'I think, in places like Berlin, there is a lot of potential for community accountability to form, maybe if people overlook the pedantic, administrative details, and focus on the parties and emotions at stake. <strong>Under a microscope, in every place, there are pockets of promise, where there are enough people striving for mutual aid and social accountability</strong>, so I think it\'s possible, if people are more altruistic in their behaviour and motives.',
        personId: 20
      },
      {
        tagline: 'Scale up the work',
        quote: '"What are you already doing to try to address the violence that is happening?" [People] have more skills than they knew they did. <strong>This is already the alternative underway. This is already a new form of life</strong> being developed in the midst of this form of life, but how do you articulate that? And how do you show, how do you give evidence-based research that this is having an effect? How do you quantify it for people who want to know what to do with the \'worst of the worst\'? So I do think a lot more work needs to happen...'
        + '<br><br>' + 'Well I don\’t know I\’m really torn about this, because in some ways the <strong>mechanisms for legitimating community accountability are the old mechanisms of the carceral state</strong>. So, in some ways I\’m really happy to have this work to be happening under the radar, and in these very interstitial spaces where it\’s not clear where the outcome is going to be, it\’s not clear what\’s going to happen next, because that in some way <strong>escapes the carceral state</strong>, or it happens just under the radar within it. But if prisons are going to be abolished, if we are going to live in a world without rape and without sexual assault, and I think we can, then <strong>we have to scale it up or we have to articulate it in ways that more people can interact with and understand and buy into</strong>.',
        personId: 3
      },
      {
        tagline: 'Question of scale',
        quote: 'On what <strong>scale</strong> are we willing to do [state-type stuff], on what scale is it appropriate to do that? If we want to create something different, are we willing to say or even experiment with...<strong>what about a state of 7</strong>? What is the <strong>difference between a state and a household</strong>? Are these the scales that we want to operate on?'
        + '<br><br>' +'And how concrete are we willing to be in what we would want to replace the present state? You know, like what are <strong>future states of being</strong> that we would be willing to imagine concretely enough to commit to? And would we be willing to do that, is it possible to do that, to create a state, in a way that still acknowledges the need for the poetic intervention, the <strong>inevitable insufficiency of a state</strong>.',
        personId: 1
      }
    ]
  }
];
