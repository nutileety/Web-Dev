type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvents = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeEvents) => {
    console.log(`Handling event: ${event}`);
}

handleEvent('click');
// handleEvent('scroll') //exclude error