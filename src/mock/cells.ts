import { Cell } from '@ckb-lumos/base'
export const bidCell: Cell = {
  cell_output: {
    capacity: '0x12a05f2000',
    lock: {
      code_hash: '0x04878826e4bf143a93eb33cb298a46f96e4014533d98865983e048712da65160',
      hash_type: 'data',
      args: '0x688327ab52c054a99b30f2287de0f5ee67805ded',
    },
    type: {
      code_hash: '0xc68fb287d8c04fd354f8332c3d81ca827deea2a92f12526e2f35be37968f6740',
      hash_type: 'type',
      args: '0xbe7e812b85b692515a21ea3d5aed0ad37dccb3fcd86e9b8d6a30ac24808db1f7',
    },
  },
  out_point: {
    tx_hash: '0x64f2586de4d3861d8b9a6d43a21752006b5b7b0991ad7735d8b93d596f516dee',
    index: '0x0',
  },
  block_hash: '0xaaeee4a93a1d79ccdf50f9e2e6c688f9d935bb8c21aeaf2c09508f8070b1bd89',
  block_number: '0x13',
  data:
    '0x00743ba40b000000000000000000000000e40b5402000000000000000000000000c817a804000000000000000000000000743ba40b00000000',
}

export const askCell: Cell = {
  cell_output: {
    capacity: '0x12a05f2000',
    lock: {
      code_hash: '0x04878826e4bf143a93eb33cb298a46f96e4014533d98865983e048712da65160',
      hash_type: 'data',
      args: '0x688327ab52c054a99b30f2287de0f5ee67805ded',
    },
    type: {
      code_hash: '0xc68fb287d8c04fd354f8332c3d81ca827deea2a92f12526e2f35be37968f6740',
      hash_type: 'type',
      args: '0xbe7e812b85b692515a21ea3d5aed0ad37dccb3fcd86e9b8d6a30ac24808db1f7',
    },
  },
  out_point: {
    tx_hash: '0x64f2586de4d3861d8b9a6d43a21752006b5b7b0991ad7735d8b93d596f516dee',
    index: '0x1',
  },
  block_hash: '0xaaeee4a93a1d79ccdf50f9e2e6c688f9d935bb8c21aeaf2c09508f8070b1bd89',
  block_number: '0x13',
  data: '0x00743ba40b000000000000000000000000e8764817000000000000000000000000743ba40b00000001',
}
