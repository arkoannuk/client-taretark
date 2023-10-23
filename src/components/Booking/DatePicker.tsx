import { useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

export function PersonalData() {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
    return (
      <Group position="center">
        <DatePicker type="range" value={value} onChange={setValue} />
      </Group>
    );
}