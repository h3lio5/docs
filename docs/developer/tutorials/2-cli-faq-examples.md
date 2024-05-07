# Useful commands
Useful commands for developing and interacting with using the cli

### Interacting with the sequencer

The sequencer commands helps creating and managing an account over the sequencer network. 

```bash
# Transfer funds between sequencer accounts
astria-go sequencer transfer <amount> <to>    

# creates a sequencer account storing it in a keyfile as default
astria-go sequencer createaccount

# Get current balance of a sequencer account.  
astria-go sequencer balances <address> --url <sequencer_rpc_url>

# Get the current block height of the Sequencer.
astria-go sequencer blockheight	--url <sequencer_rpc_url>
```
:::tip
For commands that require signing and broadcasting transactions there are few options for importing private key, choose which one to use by setting the keyring flags:

* `--keyfile <path_to_keyfile> ` - encrypted keyfile stored localy (defaults ~/.astria/keyfile)
* `--keyring-address <sender_address>` - system keyring for fetching keys, require keys to be stored in keyring
* `--privkey <accounts_private_key>` -  a private key, this is the least secure way

Only one flag can be set, defaults to `--keyfile`.
:::

### evelopment commands

Useful commands to configure the environments and running components.

```bash
# Downloads binaries and initializes the local environment.
astria-go dev init

# Runs a minimal, local Astria stack.
astria-go dev run --local

# Runs a composer and a conductor with a remote sequencer
astria-go dev run --remote

# Reset the Cometbft config files. 
astria-go dev reset config 

# Reset the environment files.  
astria-go dev reset env

# Reset the seqeuencer state. 
astria-go dev reset state

# Delete all binaries for a given instance.
astria-go dev purge binaries      

# Delete the entire instance.                                   |
astria-go dev purge all   
```
:::warning

`dev purge all` command will delete the entire ~/.astria directory data, doing so will remove any keys saved in files!
:::