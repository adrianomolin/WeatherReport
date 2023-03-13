import { Average, Container, Tag, Temperature } from './styles';

interface ContentProps {
  temperature: number,
  min: number,
  max: number,
}

export function Content({ temperature, min, max}: ContentProps) {
  return (
    <Container>
      <Temperature>
        <div className='number'>
          {temperature}
        </div>
        <Average>
          <div className='max'>
            {min}°
          </div>
          <div className='min'>
            {max}°
          </div>
        </Average>
      </Temperature>
      <Tag>
              °C
      </Tag>
    </Container>
  );
}
