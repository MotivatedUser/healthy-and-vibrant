const testimonialData = [
    {
        id: 1,
        name: 'Doug A.',
        location: 'Newman Lake, WA',
        rating: 5,
        comment: "Healthy and Vibrant was life changing for me! I have had medical issues that got worse through 15 years of traditional medicine. Going here was an absolute game changer! I started healing and although I'll never get back to 100% at this point, I am improving rather than still slipping down that slippery slope! 110% recommend. Put Hippocrates's famous words to good use by 'Letting food be thy medicine.'"
    },
    {
        id: 2,
        name: 'Scott C.',
        location: 'Spokane',
        rating: 5,
        comment: 'My friend goes but when she is done with her appointment, she always feel better and more lifted up.'
    },
    {
        id: 3,
        name: 'Kendal P.',
        location: 'Spokane',
        rating: 5,
        comment: "I am so thankful I was introduced to Roxane a few years back. Since seeing Roxane I have lost weight, gained life back without having to suffer from severe migraines and so much more. I have learned to invest in my health as we only get one body. I was skeptical at first just like anybody else. I took me spending thousands of dollars, more time than I care to admit with regular doctors to hear them say exercise and eat healthy and no results. I will guarantee that you are not just another number or a one size fits all case when you are a client of Roxane's. She is invested in your health and finding the root cause to your symptoms. Well what are you waiting for? Call and get on her books today, you will not regret this decision!"
    },
    {
        id: 4,
        name: 'Anonymous',
        rating: 5,
        comment: "Before I came to see Roxane, I was always tired.  I was having daily headaches, extreme food sensitivities and major digestive problems.  I was sure that my life was destined to be miserable forever. After a few visits, I have a lot more energy, no headaches or digestive problems.  I was able to determine what foods were needing to be excluded from my diet and what ones I could add back in.  Taking regular supplements has also helped me to determine what optimal health feels like.  With continued care, I have been able to evaluate other underlying issues that needed to be addressed."
    },
    {
        id: 5,
        name: 'SMR',
        rating: 5,
        comment: " I had low energy, Extreme drowsiness daily, painful gas, cramps, painful menstruation cramps, bad dreams, slept walked ~almost every night, mood swings, grinded my teeth at night, frequently reoccurring ear blockage and was Always hungry. Two weeks after my first visit, the first 3 symptoms were no longer a problem. After 3 months, the bad dreams and sleep walking were cured. I no longer suffer from hearing loss due to blockage. With Roxane's consent, I was strong enough to do a liver cleanse after a year of visits. My menstruation has been free of pain ever since. As well as, I have increased energy and a controlled appetite (feeling satisfied after a meal/no longer feeling as though I was continually starving). Some of these problems and others had been addressed to previous doctors. Some prescribed medication, which did nothing to improve the condition, or made it worse-and made me sick. Or, they did not address the problem at all. Roxane addressed every problem- whether they were ones I directly asked about or not.  For example, I never complained about grinding my teeth, but she discovered it and after only 2 weeks of treatment, I was no longer grinding my teeth! However, experience has shown me that the muscle testing technique alone cannot detect every malady. It can just eliminate foods or add supplements to detox or fortify the compromised organ. Sometimes, taking other routes of information to heal these organs may be necessary, too. Thank you, Roxane, for helping so many people get started with their best foot forward."
    },
    {
        id: 6,
        name: 'DA',
        rating: 5,
        comment: "I had mentioned Healthy and Vibrant to my daughter and said if she went, then I would go. After some visits, my daughter asked how I was feeling. It became evident that I hadn't been in touch with myself. I recalled that normally during the winter, I felt older, colder and my knees were very stiff. I had brain fog and difficulty finding words. I have macular degeneration and always had “floaters”. I needed my glasses to read and couldn't see the dashboard of my car w/o them. I had a growing fear of losing my driver's license. I told her, through the program, I feel years younger! The quality of my life improved dramatically. The brain fog has lifted and I have better memory. Work has become easier and is more enjoyable. My eyesight is crisper-there really is a difference! I can see the dashboard w/o my glasses and can read larger print. Smaller print is still difficult but I have fewer floaters. I feel confident that I'll be driving for many years to come!"
    },
    {
        id: 7,
        name: 'SK',
        rating: 5,
        comment: "June 21, 2017, I was informed by Summit Cancer Center, I had terminal bone marrow cancer. Suggested treatment was chemotherapy, radiation and blood transfusions, towards the end (approximately 2 ½ years). Because of my age, surgery was not an option. Presently, I am 1 year and 4+ months past my “termination date”. Through Roxane's guidance, I have lost 100 pounds, stopped all prescription drugs (most notably blood pressure meds) and I feel energized  I still have my appointments with my oncologist for blood work.  He sees me every 6 months now. He informed me that I have starved the cancer (no sugars/no carbs) and cancer is not moving through my body. Thank God and thank you, Roxane, for your guidance and a new lease on life!!"
    },
    {
        id: 8,
        name: 'RK',
        rating: 5,
        comment: " I had chronic neck and shoulder pain due to working at a computer and just life in general. I also suffered from occasional migraines and anxiety. Now, my migraines are much fewer!  I went from 1 a week to 1 a month and my anxiety is lower, as well.  When I came in for one of my appointments, Roxane asked me how my neck and shoulder pain was and my mind went blank, I wasn't in Any Pain!!  The neck and shoulder pain had vanished and I didn't even remember that it had been there!"
    },
    {
        id: 9,
        name: 'SL',
        rating: 5,
        comment: " I was overweight, had heartburn and acid reflux. I wasn't able to walk very far before I was out of breath and I had an irritating cough. Now, I have lost 25 lbs. and still going! My heartburn and acid reflux are gone. I can walk up hills and stairs while maintaining my breath and my cough is so much better."
    },
    {
        id: 10,
        name: 'JF',
        rating: 5,
        comment: "I came in for loss of smell due to Covid. Some has come back, but I am hopeful for more. During the initial consultation, Roxane found some other areas that needed support that I feel pretty good about overall now!"
    },
    {
        id: 11,
        name: 'CB',
        rating: 5,
        comment: "Before I came to see you, I could not fly in an airplane without ear pain and 3 days of “plugged” ears, even using Afrin nose spray.  When I would get hungry, I would get very short and snappy with anyone around me. I called it “Hangry”. And, when riding my bike, especially up a steep hill or even in spin class, I would completely “hit the wall”. I couldn't breathe well and my legs had no strength. Now, my ears are amazing! I fly a lot internationally and now just use ear plugs part of the time as my ears are able to equalize the pressure. When I get hungry, I just say I need to eat something and do not get irritable. My stamina is much improved. I recognize my fatigue earlier and stop to rest or eat. Side note: I seem to be emotionally happier, have very little depression or feelings of panic and more ENERGY!"
    },
    {
        id: 12,
        name: 'TP',
        rating: 5,
        comment: "I have had acid reflux for probably 20 years, which resulted in a constant increase of an acid reducer. My doc stated that until I needed more than one per day, there was no cause for concern. I disagreed but felt I had no other options to control the minor burn in the “craw” of my throat almost every day. Since taking the enzymes and Zypan- for a couple of months- that Roxane suggested, I haven't had a Prilosec OR symptoms in probably 6 months. I called it a miracle but truly they were just helping my body do what it should be doing anyway!"
    },
    {
        id: 13,
        name: 'HF',
        rating: 5,
        comment: "I was in a lot of pain; had fatigue and stomach aches. I just wasn't feeling healthy or balanced. The doctors were not listening to my concerns and I felt over prescribed; chasing symptoms w/o learning the root causes. With Roxane, although it is still early in my program, I can already tell a difference in how I feel-specifically my stomach issues and fatigue! The environment is welcoming and I feel like Roxane does a Wonderful job listening and educating. I finally feel accepted and heard when so many other physicians would not listen."
    },
    {
        id: 14,
        name: 'LS',
        rating: 5,
        comment: " I was having problems with vertigo type symptoms-very tired and dizzy. My sleep was poor and I didn't have the energy to function. I was dealing with chronic fatigue. Now, I have much more energy to do things all day without having to sleep or lay down. My mind is clearer and my memory is better. I have lost a few pounds and people tell me how good I look (healthy skin). I don't crave sugary foods and I feel more in control of my life."
    },
    {
        id: 15,
        name: 'AO',
        rating: 5,
        comment: "I was in excruciating pain in my intestinal tract. I was out of work from February 1, 2022 until May of 2022. I went to a specialist, had many tests and was on 5-6 medications-that made me very ill and never solved my issue. I am now doing amazing since I found Roxane! She got me on a program, I put in the work and I feel Amazing! I have since made it back to work (within, probably, less that 2 weeks of my initial consultation and getting my program together). I made it to my son's wedding in May, which I was worried I was going to miss. Roxane has changed my life! I am a LIFER!!"
    },
    {
        id: 16,
        name: 'JC',
        rating: 5,
        comment: " I was having problems: I was eating foods that my body did not like which resulted in very low energy and my blood sugar was off. My bowel movements were not regular and I had a lot of bloating. After working with Roxane for about a year now, I improved my diet by eliminating food sensitivities. I have regular bowel movements and the bloating is gone. My energy is up with the addition of supplements. I am monitoring my blood sugar and drinking more water to help flush out toxins. I feel so much better and look forward to understanding more about my body Roxane is great! And, Ann too!"
    },
    {
        id: 17,
        name: 'GS',
        rating: 5,
        comment: "Before I came in to see Roxane, I was not feeling my best. I had no energy and was tired. Now, I'm feeling good with more energy throughout the entire day. I sleep better. Now, I hope growing old will be fun!"
    },
    {
        id: 18,
        name: 'KP',
        rating: 5,
        comment: "I felt TERRIBLE. I was tired, bloated and uncomfortable. Now, every day gets better. The IonCleanse Detox Footbath has helped boost my program and I have seen a tremendous difference in how I feel, sleep and even how my clothes fit!"
    },
]
export default testimonialData