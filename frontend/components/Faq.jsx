import React from 'react'
import Accordian, { AccordianItem } from './Accordian'

function Faq() {
	return (
		<Accordian className="max-w-3xl">
			<AccordianItem value={0} title="What are the symptoms of mpox?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>Mpox can cause a range of signs and symptoms. While some people have less severe symptoms, others may develop more serious illness and need care in a health facility. Common symptoms of mpox include a rash which may last for 2–4 weeks. This may start with, or be followed by, fever, headache, muscle aches, back pain, low energy and swollen glands (lymph nodes). The rash looks like blisters or sores, and can affect the face, palms of the hands, soles of the feet, groin, genital and/or anal regions. These lesions may also be found in the mouth, throat, anus, rectum or vagina, or on the eyes. The number of sores can range from one to several thousand. Some people develop inflammation inside the rectum (proctitis) that can cause severe pain, as well as inflammation of the genitals that may cause difficulties urinating.</p>
					<p>In most cases, the symptoms of mpox go away on their own within a few weeks with supportive care, such as medication for pain or fever. However, in some people, the illness can be severe or lead to complications and even death. Newborn babies, children, people who are pregnant and people with underlying immune deficiencies such as from advanced HIV disease may be at higher risk of more serious mpox disease and death.</p>
					<p>Severe disease due to mpox may include larger, more widespread lesions (especially in the mouth, eyes and genitals), secondary bacterial infections of the skin or blood, and lung infections. Complications can include severe bacterial infection from skin lesions, mpox affecting the brain (encephalitis), heart (myocarditis) or lungs (pneumonia), and eye problems. People with severe mpox may require hospitalization, supportive care and antiviral medicines to reduce the severity of lesions and shorten time to recovery.</p>
					<p>According to available data, between 0.1% and 10% of people with mpox have died. It is important to note that death rates in different settings may differ due to several factors, such as access to health care and underlying immunosuppression, including because of undiagnosed HIV or advanced HIV disease.</p>
				</div>
			</AccordianItem>
			<AccordianItem value={2} title="How does mpox spread?">
				<div className="font-medium text-gray-600 space-y-6">
					<h3 className="text-black font-bold text-xl -mb-4">From person to person:</h3>
					<p>Mpox spreads from person to person mainly through close contact with someone who has mpox. Close contact includes skin-to-skin (such as touching or sex) and mouth-to-mouth, or mouth-to-skin contact (such as kissing), and can also include being face-to-face with someone who has mpox (such as talking or breathing close to one another, which can generate infectious respiratory particles). During the global outbreak that began in 2022, the virus mostly spread through sexual contact. More research is needed on how mpox spreads during outbreaks in different settings and under different conditions.</p>
					<p>People with mpox are considered infectious until all their lesions have crusted over, the scabs have fallen off and a new layer of skin has formed underneath, and all the lesions on the eyes and in the body (in the mouth, throat, eyes, vagina and anus) have healed too, which usually takes from 2 to 4 weeks.</p>
					<p>It is also possible for the virus to persist for some time on clothing, bedding, towels, objects, electronics and surfaces that have been touched by a person with mpox. Someone else who touches these items may become infected, particularly if they have any cuts or abrasions or touch their eyes, nose, mouth or other mucous membranes without first washing their hands. Cleaning and disinfecting surfaces/objects and cleaning your hands after touching surfaces/objects that may be contaminated can help prevent this type of transmission.</p>
					<p>The virus can also spread during pregnancy to the fetus, during or after birth through skin-to-skin contact, or from a parent with mpox to an infant or child during close contact.</p>
					<p>Although getting mpox from someone who is asymptomatic (not showing symptoms) has been reported, there is still limited information on whether the virus can be transmitted from someone with the virus before they get symptoms or after their lesions have healed. Although live virus has been isolated from semen, we do not yet know the extent to which infection can spread through semen, vaginal fluids, amniotic fluids, breastmilk or blood.</p>
					
					<h3 className="text-black font-bold text-xl mt-6 mb-2">From animals to humans:</h3>
					<p>Someone who comes into physical contact with an animal which carries the virus, such as some species of monkeys or a terrestrial rodent (such as the tree squirrel) may also develop mpox. Exposure by such physical contact with an animal or meat can occur through bites or scratches, or during activities such as hunting, skinning, trapping or preparing a meal. The virus can also be caught through eating contaminated meat which is not cooked thoroughly.</p>
					<p>The risk of getting mpox from animals can be reduced by avoiding unprotected contact with wild animals, especially those that are sick or dead (including their meat and blood). In countries where animals carry the virus, any food containing animal parts or meat should be cooked thoroughly before eating.</p>
					
					<h3 className="text-black font-bold text-xl mt-6 mb-2">From humans to animals:</h3>
					<p>There have been a few reports of the virus being identified in pet dogs. However, it has not been confirmed whether these were true infections or whether the detection of virus was related to surface contamination.</p>
					<p>Since many species of animals are known to be susceptible to the virus, there is the potential for spillback of the virus from humans to animals in different settings. People who have confirmed or suspected mpox should avoid close physical contact with animals, including pets (such as cats, dogs, hamsters, gerbils), livestock and wildlife.</p>
				</div>
			</AccordianItem>
			<AccordianItem value={3} title="Who is at risk of mpox?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>People who have close contact with someone who has mpox are at risk of infection. Close contact includes skin-to-skin (such as touching or sex) and mouth-to-mouth, or mouth-to-skin contact (such as kissing), and can also include being face-to-face with someone who has mpox (such as talking or breathing close to one another, which can generate infectious respiratory particles). People who have contact with clothing, bedding, towels, objects, electronics and other surfaces that have been touched by someone with mpox are also at risk.</p>
					<p>Anyone living with someone who has mpox should take steps to reduce the risk of becoming infected. A person who has been diagnosed with mpox should be assessed by a health care provider to determine if they are well enough to be cared for at home and if isolation can be safely managed at home.</p>
					<p>Health workers should follow infection prevention and control measures to protect themselves while caring for patients with mpox (by wearing appropriate personal protective equipment and adhering to protocol for safely swabbing lesions for diagnostic testing and handling sharps such as needles).</p>
				</div>
			</AccordianItem>

			<AccordianItem value={4} title="Are gay, bisexual, or other men who have sex with men at higher risk of contracting mpox?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>The risk of mpox is not limited to people who are sexually active or gay, bisexual and other men who have sex with men. Anyone who has close contact with someone who has symptoms is at risk and any person with multiple sex partners is also at risk.</p>
					<p>Most of the cases that were reported in the multi-country outbreak in 2022/2023 were identified among gay, bisexual and other men who have sex with men. Given that the virus moves from person to person in these sexual networks in many countries, gay, bisexual and other men who have sex with men may be at higher risk of being exposed if they have sex or other form of close contact with someone who is infectious. People who have multiple or new sexual partners are most at risk. Engaging communities of gay, bisexual and other men who have sex with men to raise awareness is essential to protect those most at risk. If you are a man who has sex with other men, know your risk and take steps to protect yourself and others. Anyone who has symptoms that could be mpox should seek advice from a health care provider immediately to get tested and get care.</p>
					<p>Sex workers and their clients are also at risk. Engaging sex worker organizations and networks to raise awareness and protect those most at risk is essential to stop mpox outbreaks. Public health advice for sex workers can be found here. Advice for managers of sex-on-premises venues can be found here.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={5} title="How can I protect myself and others against mpox?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>To protect yourself and others against mpox, know the signs and symptoms, how the virus spreads, what to do if you get ill, and the risk in your area or community.</p>
					<p>If the virus is spreading in your area or in your community, have open conversations with those you come into close contact with about any symptoms you or they may have. Avoid close contact with anyone who has mpox, including sexual contact. Clean your hands frequently with soap and water or an alcohol-based hand rub.</p>
					<p>If you think you might have mpox, you can act to protect others by seeking medical advice and isolating from others until you have been evaluated and tested. If you have mpox, you should isolate yourself from others until all your lesions have crusted over, the scabs have fallen off and a new layer of skin has formed underneath. This will stop you from passing on the virus to others. Follow your local health authority instructions on isolation at home or in a health facility. If having sex, use condoms as a precaution for 12 weeks (about 3 months) after you have recovered.</p>
					<p>In countries where some animals have been found to carry the monkeypox virus (i.e. some countries in in east, central and west Africa), protect yourself by avoiding unprotected contact with wild animals, especially those that are sick or dead (including their meat and blood). Any food containing animal parts or meat should be cooked thoroughly before eating.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={6} title="What do we know about mpox and sex?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>Mpox can spread through close contact of any kind, including through kissing, touching, oral and penetrative vaginal or anal sex with someone who is infectious. People who have sex with multiple or new partners are most at risk.</p>
					<p>Anyone with new and unusual rashes or lesions should avoid having sex or any other kind of close contact with other people until they have been tested for sexually transmitted infections (STIs) and mpox. Remember that the rash can also be found in places that can be hard to see inside the body, including the mouth, throat, genitals, vagina and anus/anal area.</p>
					<p>If mpox is spreading through sex in your community or area, consider reducing your risk until the outbreak is brought under control by:</p>
					<ul className="list-disc pl-6">
						<li>openly communicating with partners about mpox symptoms and risks;</li>
						<li>exchanging contact details with sexual partners so that you can inform each other if you do develop symptoms;</li>
						<li>taking a break from having sex;</li>
						<li>reducing your number of new sexual partners, one off sexual partners, or anonymous sexual partners;</li>
						<li>consistently using condoms;</li>
						<li>avoiding group sex;</li>
						<li>avoiding sex-on-premises venues (such as cruising bars, saunas, darkrooms, commercial sex venues or any premises where sex is exchanged for money);</li>
						<li>avoiding using alcohol or drugs in sexual contexts (including chemsex);</li>
						<li>and, where and when available, by taking up the offer of vaccines.</li>
					</ul>
					<p>While the monkeypox virus has been found in semen, it is currently not known whether mpox can be spread through semen or vaginal fluids. Wearing a condom won't fully protect you from mpox, but it may reduce your risk or extent of exposure and it will help protect you and others from HIV and a range of other STIs. People with mpox are advised to use condoms for 12 weeks after they recover.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={7} title="I have mpox. What can I do to protect other people from getting infected?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>If you have mpox, your healthcare provider will advise you on what to do while you recover. Follow national advice on whether you should recover at home or if you need care in a health facility.</p>
					<p>In the meantime, it is important to avoid having close contact with others until your lesions have completely healed.</p>
					<p>If you are advised to isolate at home, protect those you live with as much as possible by:</p>
					<ul className="list-disc pl-6">
						<li>asking friends and family to help you by delivering things you need;</li>
						<li>isolating in a separate room;</li>
						<li>using a separate bathroom, or cleaning any surfaces you touched after each use;</li>
						<li>cleaning and disinfecting frequently touched surfaces with soap and water and a household disinfectant;</li>
						<li>avoiding sweeping/vacuuming (this might disturb virus particles and cause others to become infected);</li>
						<li>using separate utensils, objects, electronics, or clean well with soap and water/disinfectant before sharing;</li>
						<li>not sharing towels, bedding or clothes;</li>
						<li>doing your own laundry (lift bedding, clothes and towels carefully without shaking them, put materials in a plastic bag before carrying it to the washing machine and wash them with hot water over 60 degrees Celsius);</li>
						<li>opening windows for good ventilation; and</li>
						<li>encouraging everyone in the house to clean their hands regularly with soap and water or an alcohol-based hand sanitizer.</li>
					</ul>
					<p>If you cannot avoid being in the same room as someone else or having close contact with another person while isolating at home, then do your best to limit their risk by:</p>
					<ul className="list-disc pl-6">
						<li>avoiding touching each other;</li>
						<li>cleaning your hands often with soap and water or an alcohol-based hand sanitizer;</li>
						<li>covering your rash with clothing or bandages (until you can isolate again -- your rash will heal best if uncovered);</li>
						<li>opening windows throughout the home;</li>
						<li>ensuring you and anyone in the room with you wear well-fitting medical masks; and</li>
						<li>maintaining at least 1 metre of distance from others.</li>
					</ul>
					<p>If you cannot do your own laundry and someone else needs to do it for you, they should wear a well-fitting medical mask, disposable gloves and take the laundry precautions listed above.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={8} title="What care does someone with mpox need to recover fully?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>The care someone needs will depend on their symptoms and their risk of developing more severe disease. People with mpox should follow the advice of their health care provider. Symptoms typically last 2-4 weeks and usually go away on their own or with supportive care, such as medication for pain or fever (such as analgesics and antipyretics).</p>
					<p>It is important for anyone with mpox who is recovering at home to stay hydrated, eat well and get enough sleep. People who are self-isolating should take care of their mental health by doing things they find relaxing and enjoyable, staying connected to loved ones using technology, exercising if they feel well enough and can do so while isolating, and asking for support with their mental health if they need it.</p>
					<p>People with mpox should avoid scratching their skin and take care of their rash by cleaning their hands before and after touching lesions and keeping skin dry and uncovered (unless they are unavoidably in a room with someone else, in which case they should cover it with clothing or a bandage until they are able to isolate again). The rash can be kept clean with sterilized water or antiseptic. Saltwater rinses can be used for sores in the mouth, and warm baths with baking soda and Epsom salts can ease the discomfort of sores on the body. Paracetamol can be used to help manage the pain caused by lesions, if needed. If stronger pain medicine is needed, advice should be sought from a health care provider.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={9} title="Why does stigma related to mpox matter?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>When there is stigma or discrimination related to a medical condition, people may not seek care quickly, the quality of health care may suffer, and access to health services for the most vulnerable is reduced.</p>
					<p>It is possible to prevent or reduce stigma and discrimination related to mpox through strategies to offer stigma-free care, employ non-stigmatizing language, support people in seeking health care and create an enabling environment where the best quality of care is available.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={10} title="What should I do if a child in my care has mpox?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>Children can catch mpox if they have close contact with someone who has symptoms. Children can be exposed to the virus at home from siblings, parents, caregivers, or other family members through close contact. In some settings in Africa, children and adolescents may be exposed through hunting or trapping activities or consumption of insufficiently cooked meat. Adolescents who have engaged in sexual activity with someone with mpox can also be exposed. The mpox rash can at first resemble other common childhood illnesses, such as chickenpox and other viral infections. If a child you are caring for has symptoms that could be mpox, seek advice from a healthcare provider. They will help to get them tested, and to access the care they need.</p>
					<p>Children may be at greater risk of severe mpox than adults. They should be closely monitored until they have recovered in case they need additional care. A health worker responsible for the child may advise that they are cared for in a health facility. In this situation, a parent or caregiver who is healthy and at low risk of mpox will be allowed to stay with them.</p>
					<p>If you have confirmed or suspected mpox and you are breastfeeding, talk to your healthcare provider for advice. They will assess the risk of transmitting mpox as well as the risk of withholding breastfeeding from your infant. If it is possible for you to continue to breastfeed and have close contact, they will advise you on how to reduce the risk by taking other measures, including covering up lesions. The risk of infection will need to be carefully balanced with the potential harm and distress caused by interrupting breastfeeding and close contact between parent and child. It is not yet known whether the monkeypox virus can be spread from parent to child through breastmilk; this is an area in need of further study.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={11} title="Is there a treatment for mpox?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>Many years of research on therapeutics for smallpox have led to the development of products that may also be useful for treating mpox. For example, an antiviral developed to treat smallpox (tecovirimat) was approved in January 2022 by the European Medicines Agency for the treatment of mpox under exceptional circumstances. Experience with these therapeutics in the context of an outbreak of mpox is growing but still limited. For this reason, their use is usually accompanied by enrolment in a clinical trial or expanded access protocol accompanied by the collection of information that will improve knowledge on how best to use them in future.</p>
				</div>
			</AccordianItem>
			<AccordianItem value={12} title="Is there a vaccine against mpox?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>Yes. There are vaccines recommended by WHO for use against mpox. Many years of research have led to the development of newer and safer vaccines for an eradicated disease called smallpox. Some of these vaccines have been approved in various countries for use against mpox.</p>
					<p>At present, WHO recommends use of MVA-BN or LC16 vaccines, or the ACAM2000 vaccine when the others are not available.</p>
					<p>Only people who are at risk (for example, someone who has been a close contact of someone who has mpox, or someone who belongs to a group at high risk of exposure to mpox) should be considered for vaccination. Mass vaccination is not currently recommended. Travellers who may be at risk based on an individual risk assessment with their health care provider may wish to consider vaccination.</p>
					<p>If you are at high risk of exposure to mpox because of an ongoing outbreak in your community, talk to your healthcare provider about the vaccine options that are available to you. WHO currently recommends vaccines for people who have been close contacts of someone who has mpox, or people who belong to a group at high risk of exposure to mpox. Vaccines are one tool in our toolbox in protecting communities against mpox and should be used in combination with other public health and social measures.</p>
					<p>Mpox vaccines provide a level of protection against infection and severe disease. After you have been vaccinated, continue to take care to avoid catching and spreading mpox. This is because it takes several weeks to develop immunity after being vaccinated and because a few people may not respond to vaccination. For those who acquire mpox after vaccination, the vaccine still protects against severe disease and hospitalization.</p>
					<p>Results from vaccine effectiveness studies indicate that a good level of protection is provided against mpox following vaccination. Further studies on the use of vaccines for mpox will provide additional information on the effectiveness of these vaccines in different settings.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={13} title="Are people who are immunosuppressed at higher risk of developing severe mpox (including people living with HIV)?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>Persons with immune suppression are at higher risk of developing severe mpox or dying. Severe mpox can include larger, more widespread lesions (especially in the mouth, eyes and genitals), secondary bacterial infections of the skin or blood, and lung infections. Complications can include severe bacterial infection from skin lesions, mpox affecting the brain (encephalitis), heart (myocarditis) or lungs (pneumonia), and eye problems.</p>
					<p>People with advanced HIV disease (late presentation, low CD4 count and high HIV viral load) have an elevated risk of death if they develop severe mpox. This is more common in people with HIV status unknown prior to a diagnosis of mpox.</p>
					<p>People living with HIV who achieve viral suppression through antiretroviral treatment do not appear to be at any higher risk of severe mpox than the general population. Use of daily effective HIV treatment (antiretrovirals or ARVs) reduces the risk of developing severe mpox symptoms in the case of infection. People with untreated HIV and advanced HIV disease may be immunocompromised and therefore be at greater risk of severe mpox. WHO advises countries to integrate HIV and mpox testing, prevention and care.</p>
					<p>People who are sexually active and who do not know their HIV status are advised to seek a test for HIV. People living with HIV on effective treatment have the same life expectancy as their HIV negative peers.</p>
					<p>Severe mpox cases seen in some countries highlight the urgent need to increase equitable access to mpox diagnostic tests, vaccines and therapeutics, and to HIV prevention, testing and treatment. Without this, most affected groups are being left without the tools they need to protect their sexual health and well-being.</p>
					<p>If you are living with HIV, continue to take your HIV medication as directed. If you think you may have mpox, seek medical advice.</p>
					<p>If you think you are at risk for mpox or have been diagnosed with mpox, you may benefit from testing for sexually transmitted infections (STIs). If you don't know your HIV status, ask your health worker for an HIV test. This will help your health care provider to ensure you receive the best possible care. In 2023 there were 9 million people in the world living with HIV but not on HIV treatment and who could be at risk for advanced HIV disease -- 5 million of whom were living in Africa.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={14} title="What are the risks of mpox during pregnancy?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>Contracting mpox during pregnancy (which is considered a relative immunosuppressed state) can be dangerous for the fetus or newborn infant and can lead to loss of the pregnancy, stillbirth, death of the newborn, or complications for the parent. If you are pregnant, avoid close contact with anyone who has mpox. Anyone who has close contact with someone who is infectious can get mpox, regardless of who they are. If you think you have been exposed to or are showing symptoms that could be mpox, contact your healthcare provider. They will help you get tested and access the care you need.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={15} title="I've had mpox in the past. Can I catch it again?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>Our understanding of how long immunity following mpox lasts continues to evolve. There have been some cases of second infections reported. A few people may get mpox despite having had it before. Even if you have had mpox in the past, you should be doing everything you can to avoid getting re-infected.</p>
					<p>If you have had mpox in the past and someone in your household has it now, you can protect others by being the designated caregiver, as you are more likely to have some immunity than others. However, you should still take all precautions to avoid exposure as far as possible.</p>
				</div>
			</AccordianItem>

			<AccordianItem value={16} title="What are the different virus clades and how do they differ in impact?">
				<div className="font-medium text-gray-600 space-y-6">
					<p>There are two broad clades of the virus: clade I and II. Clade II was behind the global mpox outbreak that began in 2022.</p>
					<p>The current understanding is that clade I leads to more severe disease and death than clade II in the populations where it is endemic. However, differences in the features of past outbreaks such as population groups affected make it hard to draw a firm conclusion.</p>
					<p>Public health advice from WHO applies for prevention and management of mpox arising from either clade.</p>
					<p>A new offshoot of clade I virus, called clade Ib, was first reported in the Democratic Republic of the Congo in 2023, and has been spreading through sex and other types of close contact. Studies are underway to understand the properties of this new strain.</p>
				</div>
			</AccordianItem>
		</Accordian>
	)
}

export default Faq