from homeassistant.components.sensor import SensorEntity, SensorDeviceClass

from ..const import DOMAIN, BRAND

from ..nhccoco.devices.simulation_action import CocoSimulationAction


class Nhc2SimulationActionBasicStateEntity(SensorEntity):
    _attr_has_entity_name = True

    def __init__(self, device_instance: CocoSimulationAction, hub, gateway):
        """Initialize a enum sensor."""
        self._device = device_instance
        self._hub = hub
        self._gateway = gateway

        self._device.after_change_callbacks.append(self.on_change)

        self._attr_available = self._device.is_online
        self._attr_unique_id = device_instance.uuid + '_basic_state'
        self._attr_should_poll = False

        self._attr_device_class = SensorDeviceClass.ENUM
        self._attr_options = self._device.possible_basic_states
        self._attr_native_value = self._device.basic_state
        self._attr_state_class = None

    @property
    def name(self) -> str:
        return 'Basic State'

    @property
    def device_info(self):
        """Return the device info."""
        return {
            'identifiers': {
                (DOMAIN, self._device.uuid)
            },
            'name': self._device.name,
            'manufacturer': BRAND,
            'model': str.title(f'{self._device.model} ({self._device.type})'),
            'via_device': self._hub
        }

    @property
    def state(self) -> str:
        return self._device.basic_state

    def on_change(self):
        self.schedule_update_ha_state()
