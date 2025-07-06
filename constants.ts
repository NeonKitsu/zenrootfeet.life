
import { NavLink, PillarCardProps } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Zen', path: '/zen-meditation', emoji: '🧘' },
  { name: 'Root', path: '/root-grounding', emoji: '🌳' },
  { name: 'Feet', path: '/holistic-foot-care', emoji: '👣' },
  { name: 'Blog', path: '/blog', emoji: '✍️' },
];

export const ZEN_CARDS: PillarCardProps[] = [
  { slug: '/zen-meditation/breathing-tool', title: 'Box Breathing Tool', description: 'A guided tool for box breathing, a simple yet powerful relaxation technique.', emoji: '🌬️' },
  { slug: '/zen-meditation/meditation-timer', title: 'Meditation Timer', description: 'A minimalist timer to help you focus during your meditation sessions without distraction.', emoji: '⏳' },
  { slug: '/zen-meditation/guided-visualizations', title: 'Guided Visualizations', description: 'Journey inward with simple, text-based visual meditations to calm the mind.', emoji: '🏞️' },
  { slug: '/zen-meditation/mindful-movement', title: 'Mindful Movement', description: 'Get simple prompts to reconnect with your body through gentle, mindful movement.', emoji: '🚶‍♀️' },
  { slug: '/zen-meditation/gratitude-journal', title: 'Gratitude Journal', description: 'Cultivate a positive mindset with daily prompts for reflection and gratitude.', emoji: '🙏' },
  { slug: '/zen-meditation/focus-object', title: 'Focus Object Selector', description: 'Aid your concentration with a simple visual anchor for your meditation practice.', emoji: '🎯' },
];

export const ROOT_CARDS: PillarCardProps[] = [
  { slug: '/root-grounding/5-4-3-2-1-technique', title: '5-4-3-2-1 Technique', description: 'Interactive Tool: Ground yourself in the present moment using your five senses.', emoji: '🖐️' },
  { slug: '/root-grounding/4-7-8-breathing', title: '4-7-8 Breathing', description: 'Interactive Tool: A guided pacer for this powerful calming breathwork technique.', emoji: '😮‍💨' },
  { slug: '/root-grounding/muscle-relaxation', title: 'Progressive Muscle Relaxation', description: 'Interactive Tool: Release tension from your body with this guided exercise.', emoji: '💪' },
  { slug: '/root-grounding/categories-game', title: 'Categories Game', description: 'Interactive Tool: A simple mental game to quickly shift your focus away from anxiety.', emoji: '🧠' },
  { slug: '/root-grounding/affirmations', title: 'Affirmation Generator', description: 'Interactive Tool: Soothing phrases to remind you of your safety and strength.', emoji: '❤️‍🩹' },
  { slug: '/root-grounding/sensory-guide', title: 'Sensory Grounding Guide', description: 'Guide: A deep dive into using touch, sight, and sound to anchor yourself.', emoji: '👂' },
  { slug: '/root-grounding/mental-guide', title: 'Mental Grounding Guide', description: 'Guide: Learn cognitive tricks and exercises to regain mental control.', emoji: '✍️' },
];

export const FEET_CARDS_HOME: PillarCardProps[] = [
  { slug: '/holistic-foot-care/daily-hygiene', title: 'Daily Foot Hygiene', description: "The simple, crucial steps to keep your feet happy and healthy every single day.", emoji: '🧼' },
  { slug: '/holistic-foot-care/foot-stretches', title: 'Interactive Foot Stretches', description: 'Interactive Tool: A guided routine to improve flexibility and soothe your feet.', emoji: '🧘‍♀️' },
  { slug: '/holistic-foot-care/foot-soaks-rituals', title: 'Soothing Foot Soaks & Rituals', description: 'Guide: DIY recipes and rituals to comfort tired feet.', emoji: '🛀' },
  { slug: '/holistic-foot-care/conscious-footwear', title: 'Conscious Footwear Guide', description: 'Guide: Understand how shoes impact your health and how to choose wisely.', emoji: '👟' },
  { slug: '/holistic-foot-care/stress-reduction', title: 'Stress Reduction', description: 'Discover how mindfulness can reduce stress and positively impact your foot health.', emoji: '😌' },
];

export const FEET_CARDS_PRO: PillarCardProps[] = [
  { slug: '/holistic-foot-care/podiatry-services', title: 'Podiatry / Chiropody', description: 'Learn what a foot specialist does and how they can help keep you moving.', emoji: '🩺' },
  { slug: '/holistic-foot-care/physical-therapy', title: 'Physical Therapy', description: 'Discover how a PT can help with foot pain, injuries, and improving function.', emoji: '💪' },
  { slug: '/holistic-foot-care/dry-needling', title: 'Dry Needling', description: 'Learn about this technique for relieving muscle pain, performed by a licensed pro.', emoji: '💉' },
  { slug: '/holistic-foot-care/cupping', title: 'Cupping Therapy', description: 'An educational look at how suction is used to relieve muscle tension.', emoji: '🟣' },
  { slug: '/holistic-foot-care/shockwave-therapy', title: 'Shockwave Therapy', description: 'A modern, non-invasive treatment for chronic soft tissue injuries.', emoji: '⚡' },
  { slug: '/holistic-foot-care/reflexology', title: 'Professional Reflexology', description: 'Explore the theory of applying pressure to points on the feet.', emoji: '✨' },
];

export const BLOG_POSTS: PillarCardProps[] = [
    { slug: '/blog/connecting-with-nature', title: 'The Easiest Way to Reconnect With Nature', description: "It's simpler than you think. Let's talk about finding our roots again.", emoji: '🌱' },
    { slug: '/blog/alaska-grounding', title: 'Grounding in The Last Frontier: My Alaskan Adventure', description: "Barefoot in Alaska? You bet. Here's what I learned about true wild connection.", emoji: '🐻' },
    { slug: '/blog/beyond-the-backdoor', title: 'Beyond the Backdoor: Simple Ways to Rediscover Your Wild Self', description: "You don't need a grand expedition. The wilderness in you is waiting right outside.", emoji: '🚪' },
    { slug: '/blog/unplugged-path', title: 'The Unplugged Path: Finding Peace in Nature\'s Embrace', description: "No Wi-Fi required. Discover the profound calm that comes from true disconnection.", emoji: '📵' },
    { slug: '/blog/natures-whisper', title: 'Nature\'s Whisper: Listening to the Earth for Inner Calm', description: "The world is speaking. Learn to tune in and find the peace in its voice.", emoji: '🌬️' },
    { slug: '/blog/daily-dose-of-green', title: 'Your Daily Dose of Green: Cultivating Connection', description: "Actionable tips to weave the natural world into your everyday modern life.", emoji: '🌿' },
    { slug: '/blog/reclaiming-natural-rhythm', title: 'Reclaiming Your Natural Rhythm: How Nature Grounds Us', description: "In a world that rushes, learn how nature's cycles can bring you back to yourself.", emoji: '🔄' },
    { slug: '/blog/wilderness-wisdom-alaska', title: 'Wilderness Wisdom: Lessons from My Barefoot Journey in Alaska', description: "The Alaskan wild taught me more than any book could. Here are the lessons.", emoji: '🏔️' },
    { slug: '/blog/art-of-unplugging-alaska', title: 'The Art of Unplugging: My Extreme Grounding in the Alaskan Wild', description: "An intentional journey into the silence of the wild, and what it gave back.", emoji: '🔌' },
    { slug: '/blog/beyond-the-map-alaska', title: 'Beyond the Map: What the Alaskan Wilderness Taught Me', description: "It's not about the destination, but the transformation. A story of being truly present.", emoji: '🗺️' },
    { slug: '/blog/finding-stillness-alaska', title: 'Finding Stillness in the Untamed: My Adventures & What They Mean for You', description: "How a journey to the wild can help you find the quiet place within yourself.", emoji: '🤫' },
    { slug: '/blog/concrete-to-conifer-alaska', title: 'From Concrete to Conifer: My Journey to Deeper Grounding', description: "An evocative story of leaving the city behind to find my roots in the forest.", emoji: '🌲' },
    { slug: '/blog/quiet-revolution', title: 'The Quiet Revolution: Embracing Stillness in a Noisy World', description: "Choosing calm is a radical act. Join the quiet revolution.", emoji: '✊' },
    { slug: '/blog/unlocking-inner-compass', title: 'Unlocking Your Inner Compass: A Journey into Intuitive Well-being', description: "Learn to trust your own guidance through simple, holistic practices.", emoji: '🧭' },
    { slug: '/blog/beyond-the-mat', title: 'Beyond the Mat: Weaving Mindfulness into Your Everyday Life', description: "Meditation isn't just for the cushion. Take your practice into the real world.", emoji: '🧘‍♀️' },
    { slug: '/blog/subtle-power-of-presence', title: 'The Subtle Power of Presence: How Small Shifts Create Big Peace', description: "It's the little moments that matter. Discover the huge impact of small acts of presence.", emoji: '✨' },
    { slug: '/blog/your-holistic-toolkit', title: 'Your Holistic Toolkit: Practices for Mind, Body, and Spirit', description: "This site is a collection of tools. Learn how to use them to find your alignment.", emoji: '🛠️' },
    { slug: '/blog/zen-of-being', title: 'The Zen of Being: Cultivating Calm in the Chaos', description: "Life is chaotic. Let's explore the simple, profound practice of just 'being'.", emoji: '☯️' },
    { slug: '/blog/mindful-mornings', title: 'Mindful Mornings, Peaceful Days: Starting Your Day with Intention', description: "How you start your morning can change your whole day. Here's a simple ritual.", emoji: '🌅' },
    { slug: '/blog/energy-of-silence', title: 'The Energy of Silence: Tapping into Your Deepest Well-being', description: "We fear silence, but it holds a deep, restorative energy. Let's explore it.", emoji: '🤫' },
];
