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

import SanctifierEnVec from "./images/mtg-images/sanctifier-en-vec.jpg";
import RestInPeace from "./images/mtg-images/rest-in-peace.jpg";
import LeylineOfTheVoid from "./images/mtg-images/leyline-of-the-void.jpg";
import RoilingVortex from "./images/mtg-images/roiling-vortex.jpg";
import PathToExile from "./images/mtg-images/path-to-exile.jpg";
import SmashToSmithereens from "./images/mtg-images/smash-to-smithereens.jpg";
import WearTear from "./images/mtg-images/wear-tear.jpg";
import DeflectingPalm from "./images/mtg-images/deflecting-palm.jpg";
import ExquisiteFirecraft from "./images/mtg-images/exquisite-firecraft.jpg";
import KorFirewalker from "./images/mtg-images/kor-firewalker.jpg";

function SideboardGuide() {
    return (
        <div className="text">
            <Title text={"Sideboard Guide"}/>

            <p>If I were lazy (which, full disclosure, I am, but I'll try not to be when it comes to writing this guide), I'd slap whatever decklist I'm currently playing on MTGO, and then just tell you which cards I side in and out in each popular matchup. But that doesn't really work, for a couple of reasons. First of all, without understanding why cards are coming in, you won't really use them to their full extent. At the very least, I need to explain you why I'm bringing in certain cards for certain matchups (even if some choices are pretty straight forward). Then, you might also not be on my exact list. Your local meta might be different from what you see on MTGO (which is very likely given how inbred the MTGO meta can be), or you might just have some personal preference in cards (which I fully support, don't let me dissuade you from playing the cards you like. Except for Kor Firewalker, don't play that garbadge card). So I'm left with what some would call a "pickle", which is to build a sideboard guide that is adaptable to different lists, all while explaining with some detail why cards are being swapped for games 2 and 3. This guide is my attempt at doing that, but do note that:</p>
            <ul>
                <li>I could be wrong on things, and I'll update this guide whenever I realise that. Feel free to give me feedback on it.</li>
                <li>You can disagree with what I say here, and that is totally fine, because I'm not some asshole that thinks everyone else is wrong about things (again, except regarding Kor Firewalker, because that card is total garbadge).</li>
            </ul>

        <Subtitle text={"Building the Sideboard"}/>
        <p>Before jumping into the actual matchups, I want to share my rule for building my Burn sideboard: the 3x5 rule. It's maybe ironic that a deck built around Lightning Bolt also has this configuration for the sideboard, but if you're playing Burn, a deck without any reliable card draw, you want your sideboard to have at least 3 copies of each card you are playing, in order to guarantee you draw them frequently enough to justify running them. As such, you'll want to have one of the following configurations:</p>
        <ul>
            <li>You play 5 different cards in your sideboard, all at 3 copies</li>
            <li>ou play 4 different cards in your sideboard, all at at least 3 copies, with the remaining slots being 4th copies of the most important cards</li>
        </ul>

        <p>Do note that this applies to types of card, not necessarily to specific cards. So, for example, if you want to include 4 slots of artifact hate, that can be split between 2 Smash to Smithereens and Shattering Spree. Having said that, there aren't many cards that can share a slot like that. Different hate cards for the same slot can sometimes have very little overlap in matchups they are useful in.</p>

        <p>But which 4/5 cards do you choose? That's the hard part, really. You need to pick things that are actually relevant for the meta you're playing in. I've tried to simplify this choice by separating available choices into packages (i.e., groups of cards that have the same purpose, but work a bit differently from each other).</p>

        <p>(NOTE: the following list of cards might not be complete. I could've forgotten something, or I could think a specific card isn't even worth mentioning, but if you think I did forget something, do message me. I'll either thank you and add it, or tell you why I don't think the card deserves the spotlight)</p>

        <Subsubtitle text={"Graveyard Hate"}/>
        <p>Sometimes you can't handle how much value your opponents get from their graveyard. Be it a super unfair deck like Dredge trying to smuggle cards onto the battlefield through the graveyard, or a slower deck incrementally gaining advantage from it, their speed and/or grinding capabilities are just too much for you to handle. To combat this, you play cards that exile the opponents graveyard, and the cards that I think are good enough to be included are:</p>
        
        <p>
            <CardHover text={"Sanctifier en-Vec: "} image={SanctifierEnVec}/>
            it's a permanent form of graveyard hate that's not only hard to kill, but can also get in for some damage, meaning extra copies aren't "dead" draws. Having some extra creatures in the side is also a great way of screwing those Leyline of Sanctity degenerates. Aside from all that, this card even has some other applications against non-graveyard centric decks. For example, protection from BR means you can bring this in to spank Prowess and Shadow decks.
        </p>

        <p>
            <CardHover text={"Rest in Peace: "} image={RestInPeace}/>
            it's amazing that this card and the previous one miss most of each other's good matchups. As such, I don't believe that you should exclusively choose one or the other, but instead, think about if you need them individually, and if you do, just play both. 6 slots in the side is heavy, but you gotta do what you gotta do.
        </p>

        <p>
            <CardHover text={"Leyline of the Void: "} image={LeylineOfTheVoid}/>
            I hate having to run this card, but some matchups just don't give you the time to safely resolve your hate cards. As Modern keeps walking towards the unfair, I fear Leylines will become staples of the format.
        </p>

        <Subsubtitle text={"Lifegain Hate"}/>
        <p>The bane of this deck (but not really), lifegain, is how a lot of decks used to prepare to play against aggro decks. In recent times, however, aggro has evolved to have its damage come from permanent sources, meaning lifegain has become a pretty bad way to stop it. It still works great against Burn, but that's about it. Having said that, it's something people still like doing. You'll often see players casting Blossoming Calm, lose on the crackback to a very unfavourable board, and then complain about it. Luckily, we have some pretty good tools to combat this, which are:</p>

        <p>
            <CardHover text={"Roiling Vortex: "} image={RoilingVortex}/>
            the best card I never even wished for, it offers something unique. Althought it's still a bit short of being its more abusive older brother, Roling Vortex offers consistent damage as part of our plan A. It's a hate card you get to play proactively, and puts pressure on the other side just by being there. The one mana it asks you to leave open to actually fulfill its purpose is, more often than not, easy to hold, meaning you still get to be aggressive in your sequencing. It's also typically hard to deal with, what with being an enchantment and all, which means sticking one for the entire game isn't that hard. It also hits all the cascade decks, if you manage to stick one against them. Just make sure to remember that it also hits your own suspended Rift Bolts. Some lists have started to play some in the mainboard, so, as an effort to maintain this guide as adequate for generic use as possible, I will include it in the outs for matchups too.
        </p>

        <p>
            <CardHover text={"Skullcrack: "} image={Skullcrack}/>
            it used to be a fixed slot in the mainboard before they gave us Skewer the Critics, but has fluctuaded in use ever since. At first, it looks like it's the best choice for the job, because at worst it's a 2 mana Lava Spike, and how bad could that be? Well, apparently, bad enough to relegate it to being the 2nd choice when it comes to anti-lifegain in the sideboard. Let me explain why I think this. Skullcrack is a reactive hate card, meaning you really want to cast it in 2 situations: if you're using it to stop lifegain, or if you're using it to win the game. The issue then comes when you have to hold up mana to be able to cast this card at a moment's notice, mana which you can't use to cast all the sorceries the deck runs, and end up slowing yourself down. As such, in cases where the anti-damage-prevention clause isn't relevant (basically, if you know someone who is stuck in 2015 and still playing Kor Firewalker, in 2020 and still playing Auriok Champion, or god forbid, in 1985 and still playing Burrengton Forge-Tender), Skullcrack just doesn't cut it as the main anti-lifegain sideboard card.

            <p>Note that this is in reference to it being a sideboard card. In the mainboard, it really is the best thing we can pack to beat the lifegain that can come during game 1. Because we don't know from the get go that we'll want to use it reactively, a bad Instant Lava Spike is a very decent floor for the card.</p>
        </p>

        <Subsubtitle text={"Removal"}/>
        <p>Although our deck has 20+ removal cards in the mainboard, sometimes things just don't die to Lightning Bolt. Be it those pesky 4 toughness Dryads, those thick Murktides, or those annoying creatures with Protection from Red, if you want to kill them, you need something else that isn't dealing 3 damage. This slot will variy depending on what you want to be killing most often, since nowadays there are options for all sorts of problem cards, which are:</p>

        <p>
            <CardHover text={"Path to Exile: "} image={PathToExile}/>
            the most common choice, since it hits everything you'd ever want dead (this does include birds, but you have to do it on their upkeep, and it kinda only stops it for a turn, since you're effectively just turning said bird into a tapped land). The downside of this card has become relevant for Control and Midrange decks in recent times, but for us, whose plan A is running over opponents with fast damage, ramping them up isn't relevant in the big majority of games.
        </p>

        <Subsubtitle text={"Artifact and Enchantment Hate"}/>
        <p>You can't really Bolt most of these, and some of them are a real beating. That means that you need answers for them, even if they end up diverging from your plan A. There's a bunch of options, but here I'll limit myself to the ones I find worthy of including, which follow:</p>

        <p>
            <CardHover text={"Smash to Smithereens: "} image={SmashToSmithereens}/>
            if you aren't worried about any Enchantments (which you should rarely be), there's nothing better than this. It's simply a Bolt attached to a Shatter, can't get more efficient than that. It is a bit narrow, so it might range from awkward to downright wrong to bring in, but in the matchups where you really need it, it just shines.
        </p>

        <p>
            <CardHover text={"Wear//Tear: "} image={WearTear}/>
            the need for this option comes from one thing and one thing alone: opponents playing Leyline of Sanctity. As much as I'd like to berate that, I can't because it is a good meta call for some decks. This is one of those cards I don't love running, but when it is needed, I'd rather do it than lose games. Notably, I don't think it's worth it to bring this in against Urza's Saga decks. As cool as stone raining opponents for 1 mana at instant speed is, you need to save your hate for their Shadowspear whenever that comes down.
        </p>

        <Subsubtitle text={"Other Options"}/>
        <p>Some hate cards are too miscellaneous to classify, being flex slots to hate on very specific things, but they have their worth, and are:</p>

        <p>
            <CardHover text={"Deflecting Palm: "} image={DeflectingPalm}/>
            an old favourite of mine, but ever since Amulet Titan stopped winning through combat damage, it's just too niche for my taste. It's also not great against Hammer anymore, since most lists include Blue for the protection counter spells.
        </p>

        <p>
            <CardHover text={"Exquisite Firecraft: "} image={ExquisiteFirecraft}/>
            with Counterspell being printed into modern, and with Force of Negation becoming a popular option to protect combos, Exquisite Firecraft is back on the menu of viable sideboard cards. I was never a fan of 3 mana value spells in Burn, but this one dealing 4 damage is a big deal in the matchups where you might be having your Bolts countered. Remember that every 4 damage spell you get through gets you close to needing 1 less resolved spell to win.
        </p>

        <p>These are the sideboard cards that I personally consider worth it to pack up. There are some others that are playable, which I haven't included here, because they are a bit more niche, and are likely only good to have around in very specific metas. Having said that, if there's a card that you think is missing, don't hesitate in contacting me, and I'll either add it here, or explain to you why said card doesn't belong in this list.</p>

        <p>I typically build my sideboard with a Graveyard hate package, an Anti-lifegain package, a Removal package, and an Artifact hate package. Then the last 3 slots are toss ups. If there isn't any deck that's particularly worrying, I simply include 4th copies of the cards I already have, to further enhance my ability to draw those cards in post board games.</p>

        {/*********************************************************************************************************************************
        *****MATCHUPS**********************************************************************************************************************
        *********************************************************************************************************************************/}

        <Subtitle text={"Matchups"}/>
        <p>How to interpret the following section: I'm going to talk about each matchup, and then give you a list of cards to cut and to bring in. You'll likely end up with a number of cards different than 60, so what you do is you make cuts/adds according to the smallest number of carda you have, i.e., you count the number of ins you have, and the number of outs you have. Whichever is the lowest, you do that one first, and then do the other one (in order) until you have 60 cards.</p>

        {/******MURKTIDE************************************************************************************************************************/}
        <Subsubtitle text="Izzet Murktide"/>
        <p>There's definitely an amalgamation of words that can describe what a tempo deck is, and even though I don't know what they are, I do know that Izzet Murktide fits it. The deck wants to stick its hyper efficient threats (Ragavan, Dragon's Rage Channeler, Ledger Shredder), typically using counters, and just maintain control of the game with its huge quality of card selection. The deck's namesake card, Murktide Regent, works as an incredibly fast and evasive clock, to round up the threat package.</p>
        <p>The way to beat them as Burn is to get in the aggressor seat as soon as possible. You want them to be on the defensive, and once they are, you can start looking for windows to get the last points of damage through. This is typically when they tap more mana than they should to establish a threat, but it can also be when they are removing your threats, or when they trade down in mana to counter something. This means that if they lead on creatures, you might have to kill them. A turn 1 Ragavan while you are on the draw is typically something you have to kill, just because it is an amazing clock against us, but a Dragon's Rage Channeler is often worth a Bolt too, just due to the sheer card selection it provides. Just don't fall into the trap of trying to play the control role in the matchup.</p>
        <p>
            <b>Outs:</b>
            <ul>
                <li>
                    <CardHover text={"Roiling Vortex: "} image={RoilingVortex}/>
                    this isn't a matchup where you want to be taking damage to your own cards, since they can be quite fast at clocking you out of the game.
                </li>
                <li>
                    <CardHover text={"Lightning Helix: "} image={LightningHelix}/>
                    it would be a good card in the matchup, but Ragavan stealing it can be too big of a blowout against a deck with counters.
                </li>
                <li>
                    <CardHover text={"Skullcrack: "} image={Skullcrack}/>
                    it's a race and they aren't gaining life, and while the instant speed is relevant for the matchup, it's still inefficient enough to put it on the chopping block.
                </li>
                <li>
                    <CardHover text={"Skewer the Critics: "} image={SkewerTheCritics}/>
                    it's a sorcery that requires a creature getting through or a spell resolving in the same turn, which are things that they can interact with quite well.
                </li>
            </ul>
        </p>
        <p>
            <b>Ins:</b>
            <ul>
                <li>
                    <CardHover text={"Exquisite Firecraft: "} image={ExquisiteFirecraft}/>
                    the matchup gets pretty tight towards the end, and having an uncounterable 4 damage spell is very powerful (for the usual reason: a 4 damage spell reduces the number of spells you need to resolve to win, and against a deck with counters, this is specially important).
                </li>
                <li>
                    <CardHover text={"Path to Exile: "} image={PathToExile}/>
                    takes care of Regent for cheap, and even if it means their next one is easier to get out, that still buys quite a bit of time to try and finish them off.
                </li>
            </ul>
        </p>

        {/******RHINOS************************************************************************************************************************/}
        <Subsubtitle text={"Rhino Cascade"}/>
        <p>Rhino Cascade is built around casting Crashing Footfalls with the use of the Cascade mechanic, because as it turns out, creating 2 4/4's for 3 mana is quite strong at finishing games. There are enough removal options above 3 mana value that can be cast for less (Dead/Gone, Fury, Bonecrusher Giant, Leyline Binding), which allows the deck to be interactive in the first couple of turns, dispite being built to ensure that it cascades into Footfalls. The cherry on top of this deck is Force of Negation, which is played to ensure that no hate pieces get to stick, and/or to generally disrupt their opponents.</p>
        <p>The plan to beat them is pretty simple: go fast and hard. Their removal lines up pretty well against our creature package, but their mana base is quite bad at casting it into hasty creatures. Force of Negation is quite strong at keeping them alive, but since we play a critical mass deck, it simply means that we need to cast 1 more spell to achieve lethal.</p>
        <p>One thing about this matchup is that if their hand lines up too well against ours, the loss is going to feel crushing. You'll feel as if you had no agency in the game, but that's what it means facing fast unfair decks. Don't take it to heart, you are still favoured in the matchup as a whole. Losses just feel crappy.</p>

        <p>
            <b>Outs:</b>
            <ul>
                <li>
                    <CardHover text={"Searing Blaze: "} image={SearingBlaze}/>
                    they don't really have early targets for it, and with their great board control, it's unlikely you are actually using it to get damage through.
                </li>
                <li>
                    <CardHover text={"Skullcrack: "} image={Skullcrack}/>
                    it's a race and they aren't gaining life, this is just a bad Lava Spike.
                </li>
            </ul>
        </p>

        <p>
            <b>Ins:</b>
            <ul>
            <li>
                    <CardHover text={"Roiling Vortex: "} image={RoilingVortex}/>
                    dispite them having protection against it, this card has a lot of value if it sticks. I probably wouldn't bring it in against the 5 color version of the deck since they are packed with answers for this card, but against the stock temur version, it is very much worth it to bring in.
                </li>
                <li>
                    <CardHover text={"Exquisite Firecraft: "} image={ExquisiteFirecraft}/>
                    they will frequently hold on to their Force of Negation until after they cascade into their rhinos, because they need to ensure that no hate pieces come down. Because they are usually low enough in health by that point, having an uncounterable spell that domes them for 4 damage gives you incredible reach to win the game.
                </li>
            </ul>
        </p>

        {/******HAMMER************************************************************************************************************************/}
        <Subsubtitle text={"Hammer Time"}/>
        <p>They have two ways of beating us. Option 1 is just deploying their combo on the early turns of the game. Either they hit for 10 and you your creatures are now blockers, or they straight up hit you for 20 (or 10 infect damage). Option 2 is them taking it a bit slower, and locking it with shadowspear on a wide board.</p>
        <p>Creatures are great in this matchup. Because they need to have bodies to hold their equipments, they won't be able to afford to block most times.</p>
        <p>The secret to winning this matchup is understanding what role you should take. Urza's Saga makes it impossible to just assume the control role by default. It represents 3 cards for them, and we just can't compete with that value in an organic way. So, in hands where they are relying on Saga as a win con, you need to be racing. But in hands where they are relying on a fast combo win, you need to disrupt it so you have enough time to win. This can be tricky, because you need to carefuly examine their plans and determine which plan they are on, act from there, and be able to adapt if they try to change gears.</p>
        <p>The game of chicken with Shadowspear is a losing one, but you can minimize how badly it hurts. Don't try to kill the Shadowspeared creature unless they also try to equip it with a Hammer. Getting hit for 1 or 2 Lifelink damage is much less of a problem than having a Bolt denied by Hammer AND getting hit for 11 or 12 Lifelink damage.</p>
        <p>There's also a very cool trick with Path to Exile: if they attempt to equip a creature with a Sigarda's Aid trigger, you can Path the creature even with an open Giver of Runes. The Giver gives Protection from White, which makes the Sigarda's Aid trigger fizzle, making you the overall winner of that situation.</p>

        <p>
            <b>Outs:</b>
            <ul>
                <li>
                    <CardHover text={"Roiling Vortex: "} image={RoilingVortex}/>
                    while they do play some 0 cost cards, they aren't really pressed to play them past Vortex coming down. The anti lifegain is cute against Shadowspear, but this card is slow and expensive, 2 things you do not want in the matchup.
                </li>
                <li>
                    <CardHover text={"Lava Spike: "} image={LavaSpike}/>
                    you want to be able to interact with their board whenever it's required, and Lava Spike being a Sorcery means it can get awkward to cast while leaving mana available.
                </li>
                <li>
                    <CardHover text={"Boros Charm: "} image={BorosCharm}/>
                    as good as Charm is, it doesn't hit the board, and as such, is the next cut.
                </li>
            </ul>
        </p>

        <p>
            <b>Ins:</b>
            <ul>
            <li>
                    <CardHover text={"Deflecting Palm: "} image={DeflectingPalm}/>
                    the card reads like it would be a bomb against them, but long gone are the days where you cast this card and opponents need to take a quick minute to give it a read. Everyone knows about it, and it's not very hard to play around it if the Hammer players puts you on it. Having said that, since it does line up really well against their faster kills, it's  a very good card to include.
                </li>
                <li>
                    <CardHover text={"Smash to Smithereens: "} image={SmashToSmithereens}/>
                    pretty much the best card against them, you get to hit Shadowspear with it if necessary, but also their creatures if you are trying to establish board superiority.
                </li>
                <li>
                    <CardHover text={"Wear//Tear: "} image={WearTear}/>
                    in case you are running this card in the side, it has its worth. Shadowspear insurance is needed, and you can also get cheecky with it and destroy their Urza's Saga for a favourable tempo swing.
                </li>
                <li>
                    <CardHover text={"Skullcrack: "} image={Skullcrack}/>
                    unfortunately, because of Shadowspear, you need to run this. Blaking their big lifegain turn is essential in those Urza's Saga hands.
                </li>
                <li>
                    <CardHover text={"Path to Exile: "} image={PathToExile}/>
                    a decent card to keep the board in our favour, specially against their pro-White creatures, but a bit too reactive for the matchup, hence why so low on the priority list.
                </li>
            </ul>
        </p>

        {/******HAMMER************************************************************************************************************************/}
        <Subsubtitle text={"UWx Control"}/>
        <p>A classic matchup, it's gotten less and less favourable throughout the years. As it stands, I'd say that the matchup is even, give or take a few percentage points. That's because they've gotten a lot of tools in recent sets, enough that one of the star performers in Eidolon of the Great Revel is actually terrible in the matchup. Between Leyline Binding, Solitude, and Shark Typhoon, they get to consistently remove it without taking any damage, and that's just too much of a tempo swing when playing against a Control deck.</p>
        <p>Their gameplan against us is quite simple: neutralize every threat, stabilize at a high enough health total with counters, and then deploy a wincon while backing it up with more counters. They also play some disruptive pieces, like Teferi, Time Raveler, and sometimes even Chalice of the Void, which helps the stabilize sooner.</p>
        <p>The way to take this one is to start fast, and then play around their counters by using your instants at key moments, or by accumulating spells and bursting their remaining life points with more spells than they can counter.</p>
        <p>It's a common misconception that Rift Bolt is bad in this matchup. It's not great, but with proper sequencing you can still use it to great effect. Just don't suspend any into a potential Teferi, and you'll be fine. Or, alternatively, do suspend one into a potential Teferi, and bait them into tapping too much mana. Then respond to it with some spells, untap and win the game. A narrow line, but a very cool one to pull off.</p>
        <p>I will not recommend bringing in Roiling Vortex in this matchup. It used to be really good, but they just have too many organic answers for it. A 2 mana value spell dealing 1, or god forbid, 0 damage, is one of the worst things that can happen in this matchup.</p>
        <p>
            <b>Outs:</b>
            <ul>
                <li>
                    <CardHover text={"Eidolon of the Great Revel: "} image={EidolonOfTheGreatRevel}/>
                    their entire removal package can be cast without triggering Eidolon, which is a problem, and both Solitude and Leyline Binding are too much of a tempo blowout.
                </li>
                <li>
                    <CardHover text={"Searing Blaze: "} image={SearingBlaze}/>
                    it's a bit too reactive for the matchup, so I like to cut it under normal circumstances. If they're heavy on Snapcaster and Archmage's charm though, it can be a good enough card to keep in, but only if you really don't have anything else to bring in.
                </li>
                <li>
                    <CardHover text={"Rift Bolt: "} image={RiftBolt}/>
                    because of the interaction against Teferi, if there are enough good sideboard cards to bring in, you can cut some of these, but you shouldn't bend over backwards to cut them. That said, do note that if they are playing The One Ring, this cards becomes quite a bit worse, and you should really look into cutting every copy of it.
                </li>
            </ul>
        </p>
        <p>
            <b>Ins:</b>
            <ul>
                <li>
                    <CardHover text={"Exquisite Firecraft: "} image={ExquisiteFirecraft}/>
                    just a good spell against control decks.
                </li>
                <li>
                    <CardHover text={"Skullcrack: "} image={Skullcrack}/>
                    being able to stop any Lifegain is huge, but being an Instant is also reason enough to justify bringing it in.
                </li>
            </ul>
        </p>

        <Subsubtitle text={"Yawgmoth Evolution"}/>
        <p>Although this is effectively a combo deck, against us they typically aren't healthy enough to combo you from 2 undying creatures + Yawgmoth, so they either combo with 4 cards, which is a lot of creatures to keep alive against Burn, or they get a decent board and race you, which is reasonable since their creatures are very sticky and can be used as blockers to trade with ours. Post board, they can tutor for Sheoldred, the Apocalypse, and just push you into do or die territory.</p>
        <p>Because they aren't the fastest deck around, we have a favourable matchup against them, but like many other creature decks, it's easy to default to the control role and then not have enough juice to win before they turn the corner. So here's how you handle the matchup: you ignore the board (for the most part), you stick an early Eidolon if you can, and you just hit their face whenever you can. The only thing you have to be careful about is always leaving removal up in case they try to combo out of nowhere, similar to how you deal with storm. Aside from that, the matchup should be easy.</p>
        <p>Notably, I will not advise you to bring in most forms of graveyard hate, since their most likely path to victory is through regular board pressure and not the combo. Sanctifier barely hits them, and they can easily play around it, and Rest in Peace is too passive for the matchup. You are going to slam it down on turn 2, they will ignore it, get a wide board attacking for a bunch of damage every turn, and then tutor some lifegain option to lock down the race for their side.</p>
        <p>
            <b>Outs:</b>
            <ul>
                <li>
                    <CardHover text={"Goblin Guide: "} image={GoblinGuide}/>
                    our best creature in most matchups, but not here. It gets chumped easily and doesn't really have any favourable trades to make it amazing. They establish a board every game, so you can't even argue that maybe they can do some damage to be worth it. Just take the L and replace them with other useful cards.
                </li>
                <li>
                    <CardHover text={"Monastery Swiftspear: "} image={MonasterySwiftspear}/>
                    similar to Guide, it's very easy to have it blocked by their things, and because of their combo finish, you can't necessarily take too long to close it out. That said, because of the 1/2 stat and Prowess triggers, Guide is the first creature to go for this matchup.
                </li>
            </ul>
        </p>
        <p>
            <b>Ins:</b>
            <ul>
                <li>
                    <CardHover text={"Path to Exile: "} image={PathToExile}/>
                    the extra land for them is not really relevant, they are gonna play their entire hand fast, and having a 1 mana answer that deals with anything they play (including Yawgmoth if they are about to combo) is really good.
                </li>
                <li>
                    <CardHover text={"Skullcrack: "} image={Skullcrack}/>
                    they play Baloth in the side, and they can tutor it at any time. Luckily, they will often want to do it in a way that optimizes their mana usage, so you can likely find a window to respond to it.
                </li>
            </ul>
        </p>

        <Subsubtitle text={"Amulet Titan"}/>
        <p>From the group of decks that see popular play, this is probably the worst one for us. Their hard to interact with plan A is incredibly consistent at killing by turn 3, they can gain some life to hold on for a 4th turn win, and they have incredible stats on their blockers.</p>
        <p>Amulet is known for being incredibly complicated, which was definitely true in 2017, but the deck a lot more streamlined nowadays. Although they can still take some incredible lines, their plan A is how they win the big majority of games. Ramp up to Primeval Titan, have Amulet of Vigor and/or Dryad of the Ilysian Grove down, and then use lands like Slayers' Stronghold or Valakut to win the game on the spot.</p>
        <p>The way we can steal wins against them is by "buying" an extra turn with post board hate pieces. Path'ing a Titan when they give it Haste, or a Dryad when they stack up Valakut triggers, and you get to untap one last time to try and finish the game. Game 1 is a wash, they either keep a slow hand expecting to face a grindy deck, or it's lights out for us.</p>
        <p>
            <b>Outs:</b>
            <ul>
                <li>
                    <CardHover text={"Goblin Guide: "} image={GoblinGuide}/>
                    with Arboral Grazer, Dryad, and Saga tokens, Guide just gets bricked too easily. They also play more than 30 lands, which means Guide is a coinflip on drawing them a card, quite a bit worse than the usual 33%.
                </li>
                <li>
                    <CardHover text={"Searing Blaze: "} image={SearingBlaze}/>
                    it plays well into Arboreal Grazer, and has some very good lines alongside Swiftspear, but it will often just be an awkward
                </li>
                <li>
                    <CardHover text={"Monastery Swiftspear: "} image={MonasterySwiftspear}/>

                </li>
            </ul>
        </p>

        <Subsubtitle text="4 Color Omnath"/>
        <p>How they beat us is in the name of the deck: they slam down Omnath, Locus of Creation, and gain up to 7 life per turn cycle. They eventually win from there, since we effectively get locked out of the game. It might seem like this would be a terrible matchup at first, but the earliest turn they can do this is turn 5, which is much too slow against Burn.</p>
        <p>You want to race them pretty much every game. Don't bother killing their value pieces, they really don't matter against us. Just aim for the dome, and be done with it. Watch out for Teferi, Time Raveler, when you suspend Rift Bolts past turn 1, and be aware that creature heavy hands can get blown out by Solitude and Fury heavy hands from opponents.</p>
        <p>A neat trick against Omnath, because the card has an ETB, you can respond to that and kill it before they play the land to gain life. They might play it safe and play the land first if it's a fetchland, but they lose out on 4 whole life. Since they then need to pay 1 life to crack that fetchland, only effectively gaining 3 life that turn, you only need 1 more spell to win, and that's much easier to catch up with.</p>
        <p>
            <b>Outs:</b>
            <ul>
                <li>
                    <CardHover text={"Searing Blaze: "} image={SearingBlaze}/>
                    they aren't casting creatures early on, and the most important one doesn't die to this.
                </li>
                <li>
                    <CardHover text={"Eidolon of the Great Revel"} image={EidolonOfTheGreatRevel}/>
                    it dies too easily without dealing any damage, it's a huge liability in the matchup.
                </li>
                <li>
                    <CardHover text={"Lightning Helix: "} image={LightningHelix}/>
                    you have to race them, and your lifetotal isn't really at risk.
                </li>
            </ul>
        </p>
        <p>
            <b>Ins:</b>
            <ul>
                <li>
                    <CardHover text={"Path to Exile: "} image={PathToExile}/>
                    the cleanest out to Omnath. It's not a slam dunk, they have more copies of Omnath, and a timely Ephemerate screws us big time. Still, do it when they tap out for Omnath, and you'll likely win off of that, even through interaction and on the draw.
                </li>
                <li>
                    <CardHover text={"Roiling Vortex: "} image={RoilingVortex}/>
                    decent at keeping Omnath in check, as well as being a source of consistent damage.
                </li>
                <li>
                    <CardHover text={"Skullcrack: "} image={Skullcrack}/>
                    additional ways to stop Omnath from being a slam dunk are never bad.
                </li>
            </ul>
        </p>

        <Subsubtitle text={"Living End"}/>
        <p>Another poor matchup, but not unbeatable. Their plan is to cycle a bunch of big creatures and then cascade into Living End, bringing them all back and ending the game very quickly (2 turns, or even just 1, depending on how many fetch and shock lands were involved). This wouldn't be a problem if they just went about their plan without interaction, but they play both Grief and Force of Negation. That means they can attack our critical mass of spells, denying us our fast kill, both by discarding and countering them. We are then left with a few points of damage missing most times.</p>
        <p>Post board, they might have Leyline of Sanctity, which is can be gameover if they also have a passable Living End hand. Because of that, keeping creature heavy hands is not the worst idea.</p>
        <p>Because of their interactive pieces, typical forms of graveyard hate aren't amazing. I'd even say they are borderline bad. As such, I'm a big proponent of playing Leyline of the Void to edge against this specific matchup, while still being a very efficient (albeit risky) hate piece.</p>
        <p>
            <b>Outs:</b>
            <ul>
                <li>
                    <CardHover text={"Searing Blaze: "} image={SearingBlaze}/>
                    it could potentially be used to gain a turn, but it's much too unreliable for that.
                </li>
                <li>
                    <CardHover text={"Skullcrack: "} image={Skullcrack}/>
                    they aren't really gaining life, and you want to be racing them.
                </li>
                <li>
                    <CardHover text={"Skewer the Critics: "} image={SkewerTheCritics}/>
                    kind of a risky cut, but it's the worst of our Bolts against Leyline of Sanctity, so I'd cut it if current Living End builds play it.
                </li>
            </ul>
        </p>
        <p>
            <b>Ins:</b>
            <ul>
                <li>
                    <CardHover text={"Leyline of the Void: "} image={LeylineOfTheVoid}/>
                    if you open with it, even if they remove it on curve, the whole turn you gained from it should be enough to close it out. I'd honestly always mull for unless I had a nuts Burn hand, because you aren't really winning the game otherwise.
                </li>
                <li>
                    <CardHover text={"Rest in Peace: "} image={RestInPeace}/>
                    if it lands, your chances of winning improve quite a bit.
                </li>
                <li>
                    <CardHover text={"Roiling Vortex: "} image={RoilingVortex}/>
                    dealing 6 or more damage with a single card is good, gives you a good chance of winning after that.
                </li>
                <li>
                    <CardHover text={"Wear//Tear: "} image={WearTear}/>
                    a Leyline of Sanctity answer, which you are forced to bring in.
                </li>
            </ul>
        </p>

        <Subsubtitle text={"Archon Creativity"}/>
        <p>Their plan is to cast Indomitable Creativity on 1 or more targets and flip Archon of Cruelty, the only creature (and/or artifact) in their deck. Archon is essentially a death sentence, but between Skullcrack and simply being fast, you get to close it out before that more often than not.</p>
        <p>If they are trying to combo with a single creature on their board, you can kill it and it fizzles their Creativity spell. This shouldn't be your main plan to beat them, since they can very easily combo with a random artifact too, but it is something to keep in mind.</p>
        <p>The one line that can screw us is Persist and some discard outlet to get Archon down a turn earlier. It's not enough to justify bringing in graveyard hate, but this line will beat you from time to time and you'll feel very stressed over it. Don't let it get to your head, some losses are inevitable. Notably, there's a Jund version out there which relies much more heavily on this plan, and in that case, bringing in graveyard hate is a necessity.</p>
        <p>
            <b>Out:</b>
            <ul>
                <li>
                    <CardHover text={"Eidolon of the Great Revel: "} image={EidolonOfTheGreatRevel}/>
                    they don't really need to even cast spells into it, so it's just a bear. Ok if you get 4 damage out of it, but nothing to write home about.
                </li>
                <li>
                    <CardHover text={"Lightning Helix: "} image={LightningHelix}/>
                    they aren't really threatening our lifetotal, so this is an easy cut.
                </li>
            </ul>
        </p>
        <p>
            <b>Ins:</b>
            <ul>
                <li>
                    <CardHover text={"Skullcrack: "} image={Skullcrack}/>
                    if they do manage to slam Archon before you get to finish them off, this card ensures they are still well within reach when you untap.
                </li>
                <li>
                    <CardHover text={"Path to Exile: "} image={PathToExile}/>
                    a safety valve, in case they get Archon down and you don't have lethal on the following turn.
                </li>
                <li>
                    <CardHover text={"Roiling Vortex: "} image={RoilingVortex}/>
                    another safety valve, this one worse because of the investment it requires + not really solving the clock that is an Archon. Having said that, denying the ETB and the first attack lifegain trigger buys you enough time to dig for lethal before their second attack kills you.
                </li>
            </ul>
        </p>

        <Subsubtitle text={"Grinding Breach"}/>
        <p>Their main wincon is their combo finish (Underworld Breach + Grinding Station + Mox Amber to mill their entire deck, and the escape Thassa's Oracle to win the game). It's not very easy to interact with, but it's also not very fast, meanin you can likely race it. They also often rely on Emry to tap that Mox Amber for U mana to cast the winning Thassa's Oracle, so a timely Bolt can completely screw them over. Their secondary wincon with Urza's Saga tokens and Shadowspear is scary, but unless they lead with it and commit to it, you should manage to be faster than them.</p>
        <p>Be careful about keeping hands that rely too much on hate piece to work out. Your opponent will most likely have an answer to your first hate piece, so the rest of your hand needs to be highly functional.</p>
        <p>
            <b>Outs:</b>
            <ul>
                <li>
                    <CardHover text={"Lightning Helix: "} image={LightningHelix}/>
                    it's slow for the race plan, and with Ragavan on the other side, you don't want to take unnecessary risks.
                </li>
            </ul>
        </p>
        <p>
            <b>Ins:</b>
            <ul>
                <li>
                    <CardHover text={"Smash to Smithereens: "} image={SmashToSmithereens}/>
                    hits both their wincons, not much to add. One important thing about is not to randomly hit a meaningless artifact just because it's a target. Hold it for something that's actually important to remove (or for lethal).
                </li>
                <li>
                    <CardHover text={"Wear//Tear: "} image={WearTear}/>
                    same thing as Smash to Smithereens (it also hits Underworld Breach, which can be a relevant line to take), but doesn't deal damage.
                </li>
                <li>
                    <CardHover text={"Roiling Vortex: "} image={RoilingVortex}/>
                    stops them using Mox Amber for the combo, stops the Shadowspear lines, and puts constant pressure on them. Need I say more?
                </li>
                <li>
                    <CardHover text={"Rest in Peace: "} image={RestInPeace}/>
                    hits their combo wincon, but they are typically ready to play against such effects.
                </li>
                <li>
                    <CardHover text={"Leyline of the Void: "} image={LeylineOfTheVoid}/>
                    hits their combo wincon, but I wouldn't specifically mull for it. They can win against it quite comfortably, so you don't want to commit too much to it.
                </li>
            </ul>
        </p>

        <Subsubtitle text={"Burn"}/>
        <p>The secret to winning the mirror is keeping the board in your favour, but a pure Burn hand can easily outrace your opponent if it contains Searing Blaze and/or Lightning Helix.</p>
        <p>This matchup is obviously very close, and although you may think that whoever is on the play has the advantage, that's not necessarily true. Remember that the player on the draw has one extra draw, and in a matchup between two critical mass decks, that's very big. So the real difference maker is being the player that plays their role better. The player on the play should start the game as the aggressor, and try to maintain that role until they win. The player on the draw starts the game in the control role. They should be removing every creature that comes down on the other side asap, even before deploying their own, and only play more aggressively once the opponent has been put on their back foot. Play your role well, and you'll be rewarded. Don't, and you'll quickly find yourself in a disadvantageous position.</p>
        <p>There are moments where the roles of the players can revert, and recognizing this is huge if you want to master the Burn mirror. If you are on the play, but your opponent drops a triple Goblin Guide opener, you can't really stay in the aggressor seat. You should immediately go on damage control and kill them all fast, UNLESS you have a hand that can reasonably race that amazing opener from the other side. Triple Guide isn't super great into double Searing Blaze + double Lightning Helix, for example. So this matchup is all about recognizing what role you should be playing.</p>
        <p>One thing I won't do is include Eidolon in the "Outs" part of this matchup, not even when you are on the draw. In my opinion, Eidolon is one of the most flexible cards in the mirror. If you're on the aggressor seat, you can use it to keep the pressure on, and your opponent either wastes a card + takes 2 damage to take care of it, or they just lose. Wasting a card isn't something we typically care about in most matchups, but in the very specific case of the Burn mirror, since it is a critical mass deck, a card is really worht quite a lot. Now, if you're the draw, Eidolon probably looks like a very bad card to try and play. But the secre is: don't try to play it on curve. When you're on the control role, Eidolon is your finisher. It's what you play after you take care of all your opponent's creatures, when they are top decking for enough gas to finish you off. Because they are now digging for spells, Eidolon is going to represent A LOT of damage against them. They either find an answer fast, or they get hit for 2 every turn + how many times they trigger Eidolon while trying to finish you. This quickly ends the game in your favour.</p>
        <p>If you are palying double White mana sideboard cards, be careful with how painfully you use your mana. Double fetch and/or shocking can be too much self damage to justify casting Kor or Sanctifier, specially since getting them removed afterwards can be game losing.</p>
        <p>
            <b>Outs:</b>
            <ul>
                <li>
                    <CardHover text={"Flame Rift: "} image={FlameRift}/>
                    paying mana to have both players lose the same amount of life is just asking for a loss in this one.
                </li>
                <li>
                    <CardHover text={"Lava Spike: "} image={LavaSpike}/>
                    the lack of flexibility of this spell is just too much here. You need your spells to be able to hit the board, since you can be put in the controller role at a moments notice.
                </li>
                <li>
                    <CardHover text={"Boros Charm: "} image={BorosCharm}/>
                    same reasoning as Lava Spike, but I'd cut these second since they represent card advantage, our most important stat in the mirror.
                </li>
            </ul>
        </p>
        <p>
            <b>Ins:</b>
            <ul>
                <li>
                    <CardHover text={"Kor Firewalker: "} image={KorFirewalker}/>
                    even though you shouldn't run this card, it's most definitely one of the best for the mirror. One thing to be careful about: if you block a Red creature with this and a player casts Skullcrack, the protection from Red can no longer prevent damage, and Kor dies in combat.
                </li>
                <li>
                    <CardHover text={"Deflecting Palm: "} image={DeflectingPalm}/>
                    it works similarly to Helix in this matchup, since it effectively gains you some life while dealing damage to your opponent, and that's always good. Just be careful with Skullcrack, since it stops Palm's damage prevention, and without preventing damage, it also deals none.
                </li>
                <li>
                    <CardHover text={"Skullcrack: "} image={Skullcrack}/>
                    blanking a Lightning Helix or sniping a Kor Firewalker when they block with it is a game winning line.
                </li>
                <li>
                    <CardHover text={"Path to Exile: "} image={PathToExile}/>
                    arguably only good if you are sure your opp is on a Protection from Red creature, I like to board them in regardless. It's extra removal to keep your board favourable, so it won't really be a dead card often.
                </li>
                <li>
                    <CardHover text={"Sanctifier en-Vec: "} image={SanctifierEnVec}/>
                    it's a permanent that attacks for 2 every turn and can be used as a roadblock for opponent creatures. Watch out for Skullcrack, just like it was described in the Kor explanation.
                </li>
            </ul>
        </p>

        </div>
    );
}

export default SideboardGuide;
