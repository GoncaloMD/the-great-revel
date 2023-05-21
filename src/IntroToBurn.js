import React from "react";

import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Subsubtitle from "./components/Subsubtitle";
import CardHover from "./components/CardHover";

import LightningBolt from "./images/mtg-images/lightning-bolt.jpg";
import LavaSpike from "./images/mtg-images/lava-spike.jpg";
import SkewerTheCritics from "./images/mtg-images/skewer-the-critics.jpg";
import RiftBolt from "./images/mtg-images/rift-bolt.jpg";
import GoblinGuide from "./images/mtg-images/goblin-guide.jpg";
import MonasterySwiftspear from "./images/mtg-images/monastery-swiftspear.jpg";
import BorosCharm from "./images/mtg-images/boros-charm.jpg";

import EidolonOfTheGreatRevel from "./images/mtg-images/eidolon-of-the-great-revel.jpg";
import SearingBlaze from "./images/mtg-images/searing-blaze.jpg";
import LightningHelix from "./images/mtg-images/lightning-helix.jpg";
import Skullcrack from "./images/mtg-images/skullcrack.jpg";
import FlameRift from "./images/mtg-images/flame-rift.jpg";
import PlayWithFire from "./images/mtg-images/play-with-fire.jpg";
import ReinforcedRonin from "./images/mtg-images/reinforced-ronin.jpg";
import ShardVolley from "./images/mtg-images/shard-volley.jpg";

import Mountain from "./images/mtg-images/mountain.jpg";
import InspiringVantage from "./images/mtg-images/inspiring-vantage.jpg";
import SunbakedCanyon from "./images/mtg-images/sunbaked-canyon.jpg";
import FieryIslet from "./images/mtg-images/fiery-islet.jpg";
import AridMesa from "./images/mtg-images/arid-mesa.jpg";
import SacredFoundry from "./images/mtg-images/sacred-foundry.jpg";

function IntroToBurn() {
    return (
        <div className="text">
            <Title text={"Intro to Burn"}/>

            <p>If you're looking to get started with Burn in Modern, then this is the page for you! I will try to go over the basics of the deck, and over every card the deck classically plays.</p>

            <Subtitle text={"What is Burn?"}/>
            <p>Not unlike Love, Burn hurts. It is a deck that relies on dealing direct damage to opponents as fast as possible, mostly using spells like Lightning Bolt, but also relying on some fast aggressive creatures, like Goblin Guide.</p>

            <p>At the core of the deck is the idea that all your spells immediately do damage to the opponent, which means that your objective is quite simple: resolve enough spells to kill your opponent. That makes Burn what we call a "critical mass" deck, which makes it very unique. It plays quite differently from other decks, both in card choice and in play patterns, which means that some basics do not apply. For example, casting a turn 1 Lightning Bolt targetting the opponent is a perfectly viable play in Burn, but you'd pretty much be trolling if you did this with any other deck.</p>

            <p>As mentioned above, the deck plays 2 types of spells: direct damage Instants and Sorceries, and aggressive Creatures. Let's go over them separately, and then understand why they need eachother for the deck to function</p>

            <p>The direct damage spells are the bread and butter of the deck. I personally rate them above the creatures, simply because they are very hard to interact with. A Lightning Bolt always represents 3 damage, counterpells aside, and that's why this deck is so reliable. You have this inevitability that really pressures any opponent. They need to act fast, whatever their plan is, or else you just win the game. Numberwise, because most of your spells are dealing 3 damage, you are looking to resolve a measly 7 spells. That's very easy to achieve by turn 4, which is why so many people grunt at the sight of Burn. They know the game is going to be fast one way or another. You may think that this makes the game less interesting, since you aren't playing many turns, but I look at it the other way around. Since there are so few turns in the game, each is filled to the brim with excitement.</p>

            <p>Then you have the creatures. A very important thing about creatures in Burn is that they must be able to impact the opponent's lifetotal on the very same turn they are played. That's because they are far easier to be interacted with, so having to wait a whole turn is too unreliable. Unfortunately, there aren't many that do this with high enough damage output for us to consider, but there are enough for the deck to exist. Hell, I'd argue that you wouldn't really want to play that many, since they're a lot easier to stop than spells. But if that's the case, why doesn't the deck just cut it's creatures and play an entire list of spells? Well, the creatures offer something very important by increasing threat diversity. If all you are doing is casting Burn spells, then all opponents have to do is interact with you on that axis. Burn spells aren't super easy to interact with, but that doesn't mean they can't be. And because you are limited to drawing 1 card per turn, it's very easy for us to then run out of gas if we are only attacking opponents from 1 angle. Thus, adding creatures pushes our opponents to need some removal cards too, and we get to punish them if their hand just doesn't line up well with whatever spread of creatures and spells you drew.</p>

            <p>This all sounds like fun and games, but the deck does have its downsides. Drawing too many lands is usually a death sentence, althought the Horizon lands came to make the deck run much smoother. Running out of spells to kill the opponent with is also an issue at times, specially against decks where you need to be killing some creatures. And finally, if your opponent likes to get down a shot of Vodka with their morning cereal and they fill up their sideboard with lifegain, you are also very likely screwed. Oh, and Leyline of Sanctity does see a non zero amount of play, so that's also a card that makes winning quite a bit harder, but not impossible with a good creature start.</p>
            
            <Subtitle text={"What cards does Burn play?"}/>
            <p>So what cards does the deck actually play? There are 2 types of card that the deck plays. First, come the fixed slots. These are cards that you shouldn't really be cutting from the deck under any reasonable modern meta, and you'll find 4 copies in any well put Burn list. There are other cards not in this list that essentially have been in the list since forever, but putting them as "fixed" is a mistake, and thinking about them as such will lead you to refusing to cut them, even if it is a reasonable decision.</p>

            <p><Subsubtitle text={"Fixed Slots"}/></p>
            <p>
                <CardHover text={"Lightning Bolt: "} image={LightningBolt}/>
                the original Red card, our whole reason for existing as a deck. Since it was printed, they have tried to design a slightly worse version, which is what gave us enough of these effects at 1 mana for Burn to exist.
            </p>

            <p>
                <CardHover text={"Lava Spike: "} image={LavaSpike}/>
                one of the earliest copies of Lightning Bolt, much less versatile in utility, but as efficient as it'll ever get (at least until we get Fireblast).
            </p>

            <p>
                <CardHover text={"Skewer the Critics: "} image={SkewerTheCritics}/>
                the first of our "conditional bolts", as they're commonly reffered as. Enabling Spectacle on command is actually not trivial, which can makes this card a bit of a liability in some hands. Its biggest downside is that it isn't a turn 1 play, which is something we can't afford in most of our cards. Still, with this one very frequently costing 1 mana, we just can't pass it up.
            </p>

            <p>
                <CardHover text={"Rift Bolt: "} image={RiftBolt}/>
                our other "conditional bolt", this one playable on turn 1. Much worse when draw later, and can be responsible for losses when it is drawn as your last required spell. But that is made up by the fact that it is essentially inconditional in every other turn, which makes it strong enough to earn a permanent slot in our deck.
            </p>

            <p>
                <CardHover text={"Goblin Guide: "} image={GoblinGuide}/>
                our best creature. Some people underestimate it because they read it and think it'll draw their opponents a ton of cards, including helping them curve out their mana, but that's not how the card works. Because Goblin Guide draws lands on reveal, a land which they would've drawn either way, it actually helps your opponents find non-land spells. That means that, barring a deck with an unusually high number of lands, it will just give you info about your opponents hand around 60% percent of the time. That's a pretty good deal, specially when you add to that that Burn's games are fast, and 1 or 2 extra cards are unlikely to affect the game too much if they mean Guide is connecting. Because of this, I don't read Goblin Guide's text as a liability, but as a strength. I don't think that I have to then explain why a hasty 2/2 for R is a good card to be playing, but I will anyway. It has haste and it deals damage in multiples of 2. If it hits twice, which isn't a lot given it costs 1 mana and can come down on turn 1, will immediately represent card advantage. Any more hits are just icing on the cake.
            </p>

            <p>
                <CardHover text={"Monastery Swiftspear: "} image={MonasterySwiftspear}/>
                our other hasty 1 drop, this one is slightly worse. Prowess triggers from most of our deck, so it's going to be hitting for at least 2 every turn aside from the first, and it doesn't have that risky effect of drawing cards for our opponent, but it often only starts representing card advantage on its third hit (hits for 1 on turn 1 and most often for 2 on turn 2, which is 3 damage for 1 red mana, and needs to hit a third time to represent 4+ damage on 1 card), which is a big downgrade from Goblin Guide's second hit. Still, it will easily be 3 damage for 1 mana, and at 2 toughness that can grow and attack throug a lot of boards, it's a strong card. It can also represent up to 5 damage between turns 2 and 3 with very aggressive draws, which will be a valuable enabler of turn 4, and even some turn 3, kills.
            </p>

            <p>
                <CardHover text={"Boros Charm: "} image={BorosCharm}/>
                pretty much the whole reason we play the White alongside the Red. It dealing 4 damage is the cleanest form of card advantage we could ask for, and being an Instant just makes it too good. Its other modes can also be relevant, with the double strike having numerous combat trick applications, and the indestructible mode can really punish decks that don't play much removal and are trying to clear the board to survive.
            </p>

            <p><Subsubtitle text={"Flexible Slots"}/></p>
            <p>Now, we take a look at the "flexible" slots of the deck. That means the remaining slots not filled by the 28 occupied fixed slots. These cards can have a lot of value in the right meta, and be straight up useless in the wrong one. I'll also not include the cards I personally consider good enough for these slots if they haven't been adopted by the general community, just out of principle.</p>

            <p>
                <CardHover text={"Eidolon of the Great Revel: "} image={EidolonOfTheGreatRevel}/>
                probably my favourite Magic the Gathering card (well, behind Lightning Bolt), and a great creature for the deck. It doesn't technically deal damage the turn it comes down in, but because of its ability, it effectively impacts life totals straight away. Many Burn players will actually argue that this is a fixed slot in the deck, but the reality is, by 2023, it's efficiency has been cut down. Not enough to sell your copied of the card, but definitely enough to choose not to play it if it lines up poorly against the meta. If you're unfamiliar with Eidolon, you may think that the card isn't good. All of our spells trigger it, meaning that the effect will at best play out symmetrically, and at worst it just domes us for 2 for every spell while our opponent plays their game. But since Modern is a format defined by cheap spells, Eidolon is mostly symmetric. The secret to making the card great is breaking its symmetry, which we can do in 2 ways. The first, by design, is having Eidolon attack. The second, by deck construction, is having our spells deal 3 to our opponent, while Eidolon only does 2 to us. If you play the card by these rules, it will be one of your best cards. Eidolon also has some oddities on when to be played. It's a great follow up to other creatures, because it taxes opponents' removal, but you won't always have another creature to play before it. Learning when to hold Eidolon and only cast it when it impacts the game positively for us is the key to optimizing its effectiveness.
            </p>

            <p>
                <CardHover text={"Searing Blaze: "} image={SearingBlaze}/>
                there's quite a bit to say about this card. It's probably our best flex slot, as its ceiling is essentially casting 2 Lightning Bolts with one card. It's very unlikely that a meta is without creatures for us to target, which means it's very unlikely that you can't cast it. Having said that, a lot of people overestimate this card just because it looks like it's always a 2 for 1. But it isn't. Not really. Using it to kill a random 1/1 keywordless creature isn't actually a form of card advantage. We don't need to kill that creature (sure sure, sometimes killing a 1/1 is the difference between a win and a loss, but we're discussing typical situations here), so in that case, Searing Blaze is really just a fancy 2 mana Lightning Bolt. Another thing about this card is that, even though its ceiling is so incredibly strong, it might not be easy to trigger landfall on command more than once. It's still better to have two and only needing one than needing one and not having any, so you can play 4 copies of it when the meta calls for it. In cases where the meta isn't particularly creature heavy, I would cut the last copy and only play 3.
            </p>

            <p>
                <CardHover text={"Skullcrack : "} image={Skullcrack}/>
                a necessary evil when other decks play mainboard lifegain, simply because its floor is a 2 mana Lava Spike (not awful when you need to cover the lifegain weakness in the starting 60). I hate playing this card, because not only is it as slow as my grandpa, it also means there's enough lifegain being played that I need it. It can be hard to play a successful Skullcrack, as sometimes you have to correctly read that your opponent is going to try and gain life in the upcoming turn.
            </p>

            <p>
                <CardHover text={"Flame Rift: "} image={FlameRift}/>
                a newer addition, but a very interesting one, in my opinion. As I've said many times before, a spell dealing 4 damage is a big deal, and playing Boros Charm is most of the reason why we play Boros instead of Mono Red. So it would make sense that adding more of this effect would be desirable, but the fact that it's symmetric makes it hard to want to include in high numbers and/or alongside Eidolon of The Great Revel, which is another source of self damage. I think it's a great filler card for when Eidolon is not particularly well positioned, and/or when Lightning Helix is filling up 4 slots in your deck.
            </p>

            <p>
                <CardHover text={"Lightning Helix: "} image={LightningHelix}/>
                the best 2 mana Ligtning Bolt that is available, since we are already playing the W splash. It has the same flexibility as Lightning Bolt, but the lifegain also helps in getting the upper hand against other aggro decks. It's pretty much a filler card you play when you need some more non-land cards and don't have the need or the space for the other cards in this list.
            </p>

            <p><Subsubtitle text={"Mana Base"}/></p>
            <p>For completeness, I'll also include the lands that Boros Burn plays. Other color combinatons of Burn will be covered in other pages. One very important thing about the mana is that every land needs to tap for Red. It's easy to think a single non red land is fine, but what you're doing is you're effectively lowering the land count, but not adding a spell in its place.</p>

            <p>
                <CardHover text={"Mountain: "} image={Mountain}/>
                the only basic type the deck wants.
            </p>

            <p>
                <CardHover text={"Inspiring Vantage: "} image={InspiringVantage}/>
                for our deck, these lands are on par with the original dual lands, since it's very rare that we need the 4th untapped land.
            </p>

            <p>
                <CardHover text={"Sunbaked Canyon: "} image={SunbakedCanyon}/>
                probably the best card to be added to Burn for a long time. It just reduces the amount of games where you effectively flood, which is one of our biggest problems. These are lands when you need them, but cantrips when you don't, allowing you to dig for extra spells when you don't draw enough.
            </p>

            <p>
                <CardHover text={"Fiery Islet: "} image={FieryIslet}/>
                these lands are so good that you should also play some that don't tap for White mana.
            </p>

            <p>
                <CardHover text={"Sacred Foundry: "} image={SacredFoundry}/>
                as a part of the traditional fetch mana base, some Boros shock lands are a must.
            </p>

            <p>
                <CardHover text={"Fetchlands: "} image={AridMesa}/>
                since you shouldn't play basic lands that aren't mountains, all you need from your fetchlands is that they get to fetch for Mountain.
            </p>

            <Subtitle text={"General Tips"}/>
            <p>To close out this page, I'll be going over some tips to help you get started with the deck.</p>

            <p>Goblin Guide on turn 1 is always better than Swiftspear, but on turn 2 and with a hand full of 1 mana spells, Monastery can represent more damage. Having both a Guide and a Swiftspear in hand on turn 2 shouldn't happen often, but it can when you are forced to kill a 1 drop on your first turn.</p>

            <p>Play at instant speed whenever you can, as to try and surprise opponents with a big burst of damage. 2 Boros Charm and 2 Bolts are 14 damage, and a player at 14 life will play a lot differently than one at 7. It also leaves open the possibility of interaction. Having 2 mana up with a fetchland threatens a Searing Blaze, and it might keep opponents on the defensive when all you have is a Boros Charm. On this same wave, bluffing sideboard cards can really mess up some opponents up. If you make your Hammer opponent think that you have a Deflecting Palm in hand, you might make them slow down enough that you steal a win from them.</p>

            <p>Avoid using Searing Blaze just because it has a target. I mentioned it earlier, but you really want to be using it on a creature you HAVE to kill. Having said that, don't risk missing landfall on it because of that. If you only have 1 land in hand on your turn 2, it's usually better to kill a subpar creature and keep the aggression on than it is to wait it out. On the other hand, it can also be worth it to not play your 2nd land on curve if you have a Searing Blaze in hand and are sure (like 100% absolutely sure) they are playing an annoying creature on their turn 2. Notably, this line is only worth it if you are in a matchup where you know you will be pressed for cards (usually because you want to be removing a lot of creatures), and needs to be well weighted before being executed.</p>

            <p>Also avoid killing any threat that isn't looking to be faster than you. For example, if your opponent plays a Stoneforge Mystic on turn 3 and fetches a Batterskull, you don't need to kill it if you can win instead. This one is very obvious, but I'm just trying to illustrate how killing a threat is not always the correct play.</p>

            <p>The order you play your lands in can be very intricate. If you have a Sacred Foundry in hand, I like leading on it on my turn 1. It makes playing at instant speed in the following turns much easier when you don't shamelessly pay 2 life for an untapped land and pass the turn. I usually try to play fetchlands after that, because of their deck thinning effect. It's not a reason to play them in a mono color deck (that doesn't care about cards in the graveyard), but it is a reason to play them earlier in the game. And finally, if I have Inspiring Vantage in hand, ensuring every land up till the 4th one comes in untapped is a priority.</p>

            <p>Eidolon of the Great Revel is best when it sticks around, but it can be particularly hard to do so against decks that play removal. If my Eidolon is better than a Goblin Guide in the matchup, you can try and trick your opponent to remove your Guide before you drop the Eidolon. You can do this by not playing your second land in your first main phase. That can remove Eidolon from your opponents mind and make tem kill the Guide, just for you to then drop the 2nd land and pseudo-lock them out of the game with the Eidolon. You can also do the opposite, which in my opinion is an even stronger play. Playing the 2nd land in the first main phase without an Eidolon in hand can make your opponent unsure if they should use their removal on Guide to save 2 life, or if they should save it to keep Eidolon from beating them on its own. That's a 2nd free hit from a Guide that would be dead otherwise, which is huge when it comes to value. NOTE: for these plays to work, you kinda have to go full poker player and sell your narrative. If you want to make them think you missed your 2nd land drop, try and look upsed when you draw your card for turn, and pretend to think for a bit before you go into combat. On the other hand, if you want to make them think you have the Eidolon, play that 2nd land and make a thinking pause before declaring attackers.</p>
        </div>
    )
}

export default IntroToBurn;