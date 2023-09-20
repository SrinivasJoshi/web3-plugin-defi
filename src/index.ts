import { Web3EthPluginBase } from 'web3';
import {
	UniswapV2_Factory_ABI,
	UniswapV2_Pair_ABI,
	UniswapV2_Router2_ABI,
} from './ABIs/UniswapV2';

export class DefiPlugin extends Web3EthPluginBase {
	public pluginNamespace = 'defi';

	// UNISWAP V2 - PAIR FUNCTIONS
}

// Module Augmentation
declare module 'web3' {
	interface Web3Context {
		defi: DefiPlugin;
	}
}
